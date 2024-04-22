"use client"

import { useAuthToken } from "@/hooks/useAuthToken"
import { useConnectXMutation } from "@/hooks/useConnectXMutation"
import { Loader2 } from "lucide-react"
import { redirect, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Spotify() {
  const { mutate, isSuccess, error } = useConnectXMutation()
  const { data: token } = useAuthToken()

  const searchParams = useSearchParams()

  const code = searchParams.get("code")
  const xError = searchParams.get("error")

  useEffect(() => {
    console.log("code", code, token)

    if (code && token) mutate(code)
  }, [code, mutate, token])

  useEffect(() => {
    if (isSuccess) {
      redirect("/onboarding?x_connected=true")
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      redirect(
        `/onboarding?error_type=x_connection_error&error=${error.message}`
      )
    }
  }, [error])

  useEffect(() => {
    if (xError) {
      redirect(`/onboarding?error_type=x_redirect_error&error=${xError}`)
    }
  })

  return <Loader2 className="animate-spin" size={64} />
}
