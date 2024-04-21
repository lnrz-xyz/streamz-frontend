import { useMutation, useQueryClient } from "@tanstack/react-query"

import useApi from "./useApi"

export const useGenerateScoreMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: forceRefresh => {
      return post("/score/calculate/me", {
        force_refresh: forceRefresh,
      })
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["score"],
      })
    },
  })
}
