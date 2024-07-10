"use client"

import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi"
import abi from "@/abi/Claim"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useScore } from "@/hooks/useScore"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { Loader2 } from "lucide-react"
import { useQueryClient } from "@tanstack/react-query"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import duration from "dayjs/plugin/duration"
import clsx from "clsx"
import { useScoreShare } from "@/hooks/useScoreShare"

dayjs.extend(utc)
dayjs.extend(duration)

const ClaimButton = () => {
  const start = dayjs(process.env.NEXT_PUBLIC_CLAIM_START).utc()
  const [now, setNow] = useState(dayjs().utc())

  const { address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const queryClient = useQueryClient()

  const { data: claim, isPending } = useScore()

  const { writeContract, data: hash, error: writeErr } = useWriteContract()

  const { data: hasClaimed } = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS,
    functionName: "hasClaimed",
    args: [address],
    scopeKey: "hasClaimed",
  })

  const { data: result, error: waitErr } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const { data: shareLink, refetch } = useScoreShare()

  useEffect(() => {
    console.log(
      "hash",
      hash,
      "result",
      result,
      "waitErr",
      waitErr,
      "writeErr",
      writeErr
    )
    if (hash) {
      toast.loading("Waiting for transaction receipt...")
    }
    if (result) {
      toast.success("Transaction successful!")
      queryClient.invalidateQueries({
        predicate: query => query.queryKey[1]?.scopeKey === "hasClaimed",
      })
      refetch()
    }
    if (waitErr) {
      toast.error("Error writing contract")
    }
    if (writeErr) {
      toast.error("Error waiting for transaction receipt")
    }
  }, [hash, queryClient, result, waitErr, writeErr, refetch])

  useEffect(() => {
    // interval every second
    const interval = setInterval(() => {
      const now = dayjs().utc()
      setNow(now)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const isPastStart = now.isAfter(start)
  const disabled = isPending || (!hasClaimed && !claim) || !isPastStart

  console.log("claim", claim, hasClaimed)

  if (hasClaimed && shareLink?.link) {
    return (
      <a
        rel="noreferrer noopener"
        target="_blank"
        className="p-4 bg-white rounded-full justify-center items-center flex text-black text-base font-bold gap-1"
        href={`https://warpcast.com/~/compose?text=${encodeURIComponent(
          "Just got my Streamz airdrop! /streamz"
        )}&embeds[]=${encodeURIComponent(shareLink?.link)}`}>
        Share as Frame
      </a>
    )
  }
  return (
    <button
      className={clsx(
        "p-4 bg-white rounded-full justify-center items-center flex text-black text-base font-bold gap-1",
        disabled && "opacity-75"
      )}
      disabled={disabled}
      onClick={() => {
        if (!address) {
          openConnectModal()
          return
        }
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
      {hash && !result && <Loader2 className="w-8 h-8 animate-spin" />}
    </button>
  )
}

export default ClaimButton
