import useApi from "@/hooks/useApi"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useScore = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/score/me`)

    return resp
  }

  return useQuery({
    queryKey: ["score"],
    enabled: !!token,
    queryFn: query,
  })
}
