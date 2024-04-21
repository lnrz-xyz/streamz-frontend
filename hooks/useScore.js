import useApi from "./useApi"
import { useAuthToken } from "./useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useScore = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/score/me`)
    console.log("resp", resp)
    return resp
  }

  return useQuery({
    queryKey: ["score"],
    enabled: !!token,
    queryFn: query,
  })
}
