"use client"

import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import abi from "@/abi/Claim"
import { useEffect } from "react"
import { toast } from "sonner"

const ClaimButton = () => {
  const { address } = useAccount()

  const {
    writeContract,
    data: hash,
    error: writeErr,
  } = useWriteContract({
    abi,
    address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  })

  const { data: result, error: waitErr } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    console.log("hash", hash)
  }, [hash])

  useEffect(() => {
    if (result) {
      toast.success("Claimed airdrop!")
    }
  }, [result])

  useEffect(() => {
    if (writeErr) {
      toast.error("Error claiming airdrop")
    }
    if (waitErr) {
      toast.error("Error claiming airdrop")
    }
  }, [writeErr, waitErr])

  return (
    <button
      className="p-4 bg-white rounded-full justify-center items-center flex text-black text-base font-bold"
      onClick={() => {
        writeContract({
          ...wagmiContract,
          functionName: "claim",
          args: [buyAmount, 8],
          value: toSend,
        })
      }}>
      Claim Airdrop
    </button>
  )
}

export default ClaimButton
