import { useMutation, useQueryClient } from "@tanstack/react-query"

import useApi from "./useApi"

export const useUpsertExperienceMutation = () => {
  const queryClient = useQueryClient()

  const { post } = useApi()

  return useMutation({
    // The mutation function
    mutationFn: ({ experience, metadata }) => {
      return post("/auth/current/experiences", {
        experience,
        metadata,
      })
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["current", "experiences"],
      })
    },
  })
}
