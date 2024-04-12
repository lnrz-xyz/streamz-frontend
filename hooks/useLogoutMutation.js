import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AUTH_TOKEN_LS_KEY } from "./useAuthToken"

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    // The mutation function
    mutationFn: () => {
      localStorage.removeItem(AUTH_TOKEN_LS_KEY)
    },

    // On success or failure, refetch the gallery query to get the updated state
    onSettled: () => {
      queryClient.invalidateQueries()
    },
  })
}
