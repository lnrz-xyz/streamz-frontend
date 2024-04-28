"use client"

import { useScore } from "@/hooks/useScore"

const ContractScorePill = ({ contractAddress }) => {
  const { data: score } = useScore()

  const reasonsNFTs = score?.reasons["streamz nfts"]?.breakdown

  const scoreAmount = reasonsNFTs
    ? reasonsNFTs[contractAddress.toLowerCase()]
    : null

  if (!scoreAmount) return null

  return (
    <div className="px-2 py-1 bg-black rounded-full justify-center items-center">
      <div className="text-zinc-400 text-sm">{scoreAmount}pts</div>
    </div>
  )
}

export default ContractScorePill
