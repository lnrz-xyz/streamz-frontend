import { useCallback } from "react"
import { AUTH_TOKEN_LS_KEY, useAuthToken } from "@/hooks/useAuthToken"

const useApi = () => {
  const { data: token, refetch } = useAuthToken()

  const get = useCallback(
    async (url, onRetry = false, forceToken = null) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        headers: {
          Authorization: forceToken || token,
        },
      })
      if (response.status === 401) {
        localStorage.removeItem(AUTH_TOKEN_LS_KEY)
        const newForce = await refetch()
        if (onRetry) {
          throw new Error("Unauthorized")
        }
        return await get(url, true, newForce)
      }
      if (response.status >= 400) {
        throw new Error("failed to get" + (await response.text()))
      }
      return response.json()
    },
    [token, refetch]
  )

  const post = useCallback(
    async (url, body, onRetry = false, forceToken = null) => {
      console.log("url", url, token)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "POST",
        headers: {
          Authorization: forceToken || token,
        },
        body: JSON.stringify(body),
      })
      if (response.status === 401) {
        localStorage.removeItem(AUTH_TOKEN_LS_KEY)
        const newForce = await refetch()
        if (onRetry) {
          throw new Error("Unauthorized")
        }
        return await post(url, body, true, newForce)
      }
      if (response.status >= 400) {
        throw new Error("failed to post" + (await response.text()))
      }
      return response.json()
    },
    [token, refetch]
  )

  return { get, post }
}

export default useApi
