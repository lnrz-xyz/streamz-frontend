"use client"

import { useScore } from "@/hooks/useScore"
import { Loader2 } from "lucide-react"
import { formatEther } from "viem"
import { numberWithCommas } from "@/lib/format"

const ClaimAmount = ({ simple = false }) => {
  const { data, isPending } = useScore()
  console.log("score data", data)

  if (simple) {
    if (isPending) {
      return null
    }
    return numberWithCommas(
      Number(formatEther(BigInt(data?.amount ?? 0))).toFixed(0)
    )
  }

  return (
    <div className="flex items-center justify-center px-4 rounded-sm py-2 backdrop-brightness-[.8] backdrop-blur-xl text-4xl font-bold text-white">
      {isPending ? (
        <Loader2 className="w-8 h-8 animate-spin" />
      ) : (
        numberWithCommas(
          Number(formatEther(BigInt(data?.amount ?? 0))).toFixed(0)
        )
      )}
      <span className="text-neutral-300">STRM</span>
    </div>
  )
}

export default ClaimAmount
