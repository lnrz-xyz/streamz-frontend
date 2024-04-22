import { useCallback } from "react"
import useApi from "./useApi"
import { useQuery } from "@tanstack/react-query"
import { useAuthToken } from "./useAuthToken"

export const useAddressLeaderboard = () => {
  const { get } = useApi()
  const { data: token, isSuccess } = useAuthToken()
  const run = useCallback(async () => {
    return await get(`/score/leaderboard`)
  }, [get])

  return useQuery({
    queryKey: ["score", "leaderboard"],
    enabled: !!token && isSuccess,
    queryFn: run,
  })
}
