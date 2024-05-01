"use client"

import useApi from "@/hooks/useApi"

const { ArrowUpRight } = require("lucide-react")

const ContractFrameButton = ({ contractAddress, tokenID }) => {
  const { get } = useApi()
  const onClick = async () => {
    try {
      const resp = await get(
        `/contracts/share?address=${contractAddress}&tokenId=${tokenID}`
      )
      console.log("data from frame share", resp)
      window.open(
        `https://warpcast.com/~/compose?text=${encodeURIComponent(
          "Earn Streamz points by minting my Streamz Derivative NFT!"
        )}&embeds[]=${encodeURIComponent(resp.link)}`,
        "_blank"
      )
    } catch (e) {
      console.error("error sharing as frame", e)
    }
  }
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-row gap-2 underline rounded-full items-center transform hover:scale-105 transition-transform duration-200">
      <p className="text-base font-bold">Share as Frame</p>
      <ArrowUpRight size={16} />
    </div>
  )
}

export default ContractFrameButton
