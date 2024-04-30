"use client"

import { useScore } from "@/hooks/useScore"
import { Wallet } from "lucide-react"
import { useAccount } from "wagmi"

const Balance = () => {
  const { data: score } = useScore()
  const { address } = useAccount()

  if (!score || !address) {
    return null
  }
  return (
    <a
      href={`https://app.uniswap.org/explore/tokens/base/${process.env.NEXT_PUBLIC_STREAMZ_ADDRESS}`}
      className="h-full py-2 px-4 bg-background rounded-full justify-center items-center flex flex-row gap-1 transform hover:scale-105 transition-transform duration-200">
      <Wallet size={20} />
      <p className="text-lg text-foreground font-bold">{score.balance} STRM</p>
    </a>
  )
}

export default Balance
