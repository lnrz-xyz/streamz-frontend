"use client"
import { useCallback, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useAccount, useSignMessage } from "wagmi"

export const AUTH_TOKEN_LS_KEY = "STREAMZ_AUTH_TOKEN"

function getToken() {
  return localStorage.getItem(AUTH_TOKEN_LS_KEY)
}

// Function to decode the JWT
function decodeToken(token) {
  const base64Url = token.split(".")[1] // Get the payload part
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/") // Convert to base64
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join("")
  )

  return JSON.parse(jsonPayload)
}

// Function to check if the token is expired
function isTokenExpired(token) {
  const { exp } = decodeToken(token) // Get the exp field from token
  const currentTime = Math.floor(Date.now() / 1000) // Current time in UNIX timestamp
  return exp < currentTime
}

export const useAuthToken = () => {
  const { address } = useAccount()
  const { signMessageAsync } = useSignMessage()

  const getAuthToken = useCallback(async () => {
    console.log("getting auth token with", address)
    const curToken = getToken()
    console.log("curToken", curToken)
    if (curToken) {
      if (isTokenExpired(curToken)) {
        console.log("removing expired token")
        localStorage.removeItem(AUTH_TOKEN_LS_KEY)
      } else {
        console.log("using cached token")
        return curToken
      }
    }
    console.log("refetching auth token with", address)

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/preflight?evmAddress=${address}`
    )
    const { nonce } = await resp.json()
    console.log("signing nonce with viem", nonce)

    const sig = await signMessageAsync({
      account: address,
      message: nonce,
    })

    const lresp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        evmAddress: address,
        signature: sig,
      }),
    })

    const res = await lresp.json()

    if (!res.token) {
      throw new Error("Token not found")
    }

    localStorage.setItem(AUTH_TOKEN_LS_KEY, res.token)

    return res.token
  }, [address, signMessageAsync])

  return useQuery({
    queryKey: ["auth"],
    enabled: !!address,
    queryFn: getAuthToken,
  })
}
