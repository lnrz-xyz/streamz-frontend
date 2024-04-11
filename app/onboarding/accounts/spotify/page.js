"use client"

import { useAuthToken } from "@/hooks/useAuthToken"
import { useConnectSpotifyMutation } from "@/hooks/useConnectSpotifyMutation"
import { Loader2 } from "lucide-react"
import { redirect, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Spotify() {
  const { mutate, isSuccess, error } = useConnectSpotifyMutation()
  const { data: token } = useAuthToken()

  const searchParams = useSearchParams()

  const code = searchParams.get("code")
  const spotifyError = searchParams.get("error")

  useEffect(() => {
    console.log("code", code, token)

    if (code && token) mutate(code)
  }, [code, mutate, token])

  useEffect(() => {
    if (isSuccess) {
      redirect("/onboarding/accounts?spotify_connected=true")
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      redirect(
        `/onboarding/accounts?error_type=spotify_connection_error&error=${error.message}`
      )
    }
  }, [error])

  useEffect(() => {
    if (spotifyError) {
      redirect(
        `/onboarding/accounts?error_type=spotify_redirect_error&error=${spotifyError}`
      )
    }
  })

  return <Loader2 className="animate-spin" size={64} />
}
