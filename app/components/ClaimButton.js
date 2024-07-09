"use client"

import {
  useAccount,
  useSignMessage,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import abi from "@/abi/Claim"
import { useEffect } from "react"
import { toast } from "sonner"
import { useScore } from "@/hooks/useScore"

const ClaimButton = () => {
  const { address } = useAccount()

  const { data: claim, isPending } = useScore()

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
    pollingInterval: 1000,
  })

  useEffect(() => {
    console.log("hash", hash)
  }, [hash])

  useEffect(() => {
    console.log("result", result)
    if (result) {
      toast.success("Claimed airdrop!")
    }
  }, [result])

  useEffect(() => {
    if (writeErr) {
      toast.error("Error claiming airdrop")
      console.error(writeErr)
    }
    if (waitErr) {
      toast.error("Error waiting for claim to complete")
      console.error(waitErr)
    }
  }, [writeErr, waitErr])

  return (
    <button
      className="p-4 bg-white rounded-full justify-center items-center flex text-black text-base font-bold"
      disabled={isPending || !claim}
      onClick={() => {
        console.log("claim: ", [
          BigInt(claim?.amount),
          BigInt(claim?.nonce),
          claim?.signature,
        ])

        console.log("claim", claim)

        if (!claim) {
          return
        }
        writeContract({
          abi,
          address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS,
          functionName: "claim",
          args: [BigInt(claim.amount), BigInt(claim.nonce), claim.signature],
        })
      }}>
      Claim Airdrop
    </button>
  )
}

export default ClaimButton
