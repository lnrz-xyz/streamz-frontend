import { useCallback, useEffect } from "react"
import useApi from "./useApi"
import { useQuery } from "@tanstack/react-query"
import { useAuthToken } from "./useAuthToken"

export const useExperiences = () => {
  const { get } = useApi()
  const { data: token } = useAuthToken()

  const run = useCallback(async () => {
    const resp = await get(`/auth/current/experiences`)
    return resp?.experiences
  }, [get])

  useEffect(() => {
    console.log("token changed", token, !!token)
  }, [token])

  return useQuery({
    queryKey: ["current", "experiences"],
    enabled: !!token,
    queryFn: run,
  })
}
