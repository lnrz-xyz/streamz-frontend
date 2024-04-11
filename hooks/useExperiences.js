import { useCallback } from "react"
import useApi from "./useApi"
import { useQuery } from "@tanstack/react-query"
import { useAuthToken } from "./useAuthToken"

export const useExperiences = () => {
  const { get } = useApi()
  const { data: token, isSuccess } = useAuthToken()
  const run = useCallback(async () => {
    const resp = await get(`/auth/current/experiences`)
    return resp?.experiences
  }, [get])

  return useQuery({
    queryKey: ["current", "experiences"],
    enabled: !!token && isSuccess,
    queryFn: run,
  })
}
