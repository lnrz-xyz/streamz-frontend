import { useMutation, useQueryClient } from "@tanstack/react-query"

import useApi from "./useApi"

export const useConnectAddressMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: ({ evmAddress, signature }) => {
      console.log("evmAddress", evmAddress)
      console.log("signature", signature)
      return post("/connected/addresses", {
        evmAddress,
        signature,
      })
    },

    // On success or failure, refetch the gallery query to get the updated state
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["connected"],
      })
      queryClient.invalidateQueries({
        queryKey: ["score"],
      })
    },
  })
}
