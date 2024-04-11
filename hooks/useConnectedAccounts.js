import useApi from "./useApi"
import { useEVMAddress, useWalletContext } from "@coinbase/waas-sdk-web-react"
import { useAuthToken } from "./useAuthToken"
import { useQuery } from "@tanstack/react-query"

export const useConnectedAccounts = () => {
  const { get } = useApi()

  const { data: token } = useAuthToken()

  const query = async () => {
    const resp = await get(`/connected/accounts`)
    console.log("resp", resp)
    return resp?.accounts
  }

  return useQuery({
    queryKey: ["connected", "accounts"],
    enabled: !!token,
    queryFn: query,
  })
}
