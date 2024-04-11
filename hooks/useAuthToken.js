"use client"
import { useEVMAddress, useWalletContext } from "@coinbase/waas-sdk-web-react"
import { useCallback } from "react"
import { createWalletClient, http } from "viem"
import { base } from "viem/chains"
import { toViem } from "@coinbase/waas-sdk-viem"
import { useQuery } from "@tanstack/react-query"

export const useAuthToken = () => {
  const { wallet } = useWalletContext()
  const evmAddress = useEVMAddress(wallet)

  const getAuthToken = useCallback(async () => {
    if (!evmAddress) {
      console.log("no evm address for auth token")
      return null
    }

    console.log("refetching auth token with", evmAddress.address)

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/preflight?evmAddress=${evmAddress.address}`
    )
    const { nonce } = await resp.json()
    console.log("signing nonce with viem", nonce)
    const walletClient = createWalletClient({
      account: toViem(evmAddress),
      chain: base,
      transport: http({
        url: process.env.NEXT_PUBLIC_RPC_URL,
      }),
    })
    const sig = await walletClient.signMessage({
      message: nonce,
    })
    const lresp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        evmAddress: evmAddress.address,
        signature: sig,
      }),
    })

    const res = await lresp.json()

    if (!res.token) {
      throw new Error("Token not found")
    }

    return res.token
  }, [evmAddress])

  return useQuery({
    queryKey: ["auth"],
    enabled: !!evmAddress && !!evmAddress.address,
    queryFn: getAuthToken,
  })
}
