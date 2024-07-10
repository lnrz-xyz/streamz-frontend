import useApi from "@/hooks/useApi"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useScoreShare = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/score/me/share`)

    return resp
  }

  return useQuery({
    queryKey: ["score", "share"],
    enabled: !!token,
    queryFn: query,
  })
}
