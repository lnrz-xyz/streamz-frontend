import { useMutation, useQueryClient } from "@tanstack/react-query"
import useApi from "./useApi"

export const useConnectSpotifyMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: code => {
      console.log("code", code)
      return post("/connected/accounts/spotify", {
        code,
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
