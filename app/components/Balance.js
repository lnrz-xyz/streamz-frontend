"use client"

import { Wallet } from "lucide-react"
import { useAccount, useReadContract } from "wagmi"
import abi from "@/abi/Streamz"
import { formatEther } from "viem"
import { formatFloat } from "@/lib/format"

const Balance = () => {
  const { address } = useAccount()
  const { data, isPending, error } = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_STREAMZ_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  })

  if (error) {
    console.error("error fetching balance", error)
  }

  if (isPending) {
    return null
  }
  return (
    <a
      href={`https://app.uniswap.org/explore/tokens/base/${process.env.NEXT_PUBLIC_STREAMZ_ADDRESS}`}
      target="_blank"
      rel="noreferrer"
      className="h-12 py-2 px-4 bg-background rounded-full justify-center items-center flex flex-row gap-1 transform hover:scale-105 transition-transform duration-200">
      <Wallet size={20} />
      <p className="text-base text-foreground font-bold">
        {formatFloat(Number(formatEther(data ?? 0)))} STRM
      </p>
    </a>
  )
}

export default Balance
