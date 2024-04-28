import useApi from "./useApi"
import { useAuthToken } from "./useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useConnectedAddresses = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/connected/addresses`)

    return resp?.evmAddresses
  }

  return useQuery({
    queryKey: ["connected", "addresses"],
    enabled: !!token,
    queryFn: query,
  })
}
