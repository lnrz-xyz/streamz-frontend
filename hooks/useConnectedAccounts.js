import useApi from "./useApi"
import { useAuthToken } from "./useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useConnectedAccounts = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/connected/accounts`)

    return resp?.accounts
  }

  return useQuery({
    queryKey: ["connected", "accounts"],
    enabled: !!token,
    queryFn: query,
  })
}
