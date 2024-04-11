import { useMutation, useQueryClient } from "@tanstack/react-query"

import useApi from "./useApi"

export const useConnectEmailMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: ({ email, optin }) => {
      return post("/connected/accounts/email", {
        email,
        optin,
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
