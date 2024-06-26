import { useMutation, useQueryClient } from "@tanstack/react-query"
import useApi from "./useApi"

export const useConnectXMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: code => {
      console.log("code", code)
      return post("/connected/accounts/x", {
        code,
      })
    },

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
