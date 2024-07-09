import { useCallback } from "react"
import { useAuthToken } from "@/hooks/useAuthToken"

const useApi = () => {
  const { data: token } = useAuthToken()

  const get = useCallback(
    async url => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        headers: {
          Authorization: token,
        },
      })

      if (response.status >= 400) {
        throw new Error("failed to get" + (await response.text()))
      }
      return response.json()
    },
    [token]
  )

  const post = useCallback(
    async (url, body) => {
      console.log("url", url, token)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "POST",
        headers: {
          Authorization: forceToken || isPending ? "" : token,
        },
        body: JSON.stringify(body),
      })

      if (response.status >= 400) {
        throw new Error("failed to post" + (await response.text()))
      }
      return response.json()
    },
    [token]
  )

  return { get, post }
}

export default useApi
