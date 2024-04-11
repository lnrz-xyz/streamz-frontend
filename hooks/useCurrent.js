import { useCallback } from "react"
import useApi from "./useApi"
import { useQuery } from "@tanstack/react-query"
import { useAuthToken } from "./useAuthToken"

export const useCurrent = () => {
  const { get } = useApi()
  const { data: token, isSuccess } = useAuthToken()
  const run = useCallback(async () => {
    const resp = await get(`/auth/current`)
    return resp?.user
  }, [get])

  return useQuery({
    queryKey: ["current"],
    enabled: !!token && isSuccess,
    queryFn: run,
  })
}
