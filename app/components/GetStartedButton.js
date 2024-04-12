"use client"

import { useWalletContext } from "@coinbase/waas-sdk-web-react"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react"
import { useCurrent } from "@/hooks/useCurrent"
import { Loader2 } from "lucide-react"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useRouter } from "next/navigation"
import { useExperiences } from "@/hooks/useExperiences"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"

const GetStartedButton = ({ className, ...props }) => {
  const { waas, wallet, user, isCreatingWallet, isLoggingIn } =
    useWalletContext()

  const { data, isLoading, isFetching } = useCurrent()

  const {
    data: experiences,
    isSuccess,
    isLoading: isExperiencesLoading,
  } = useExperiences()

  const router = useRouter()

  const { isFetching: isAuthFetching, isLoading: isAuthLoading } =
    useAuthToken()

  const { mutate } = useUpsertExperienceMutation()

  const onClick = async () => {
    await waas.login()
  }

  // Automatically creating or restoring a wallet for a user.
  useEffect(() => {
    if (!user || wallet) return

    console.log("cb user", user, wallet)

    if (user.hasWallet) {
      user.restoreFromHostedBackup()
    } else {
      user.create()
    }
  }, [user, wallet])

  useEffect(() => {
    console.log("experiences", experiences, isSuccess)
    if (isSuccess && !experiences && !isExperiencesLoading) {
      console.log("experiences none")
      router.push("/onboarding")
      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })

      return
    }

    if (experiences && experiences.length > 0) {
      const hasOnboardedExperience = experiences.some(
        experience => experience.experienceType === "onboarding"
      )
      console.log("hasOnboardedExperience", hasOnboardedExperience)
      if (!hasOnboardedExperience) {
        router.push("/onboarding")
        mutate({
          experienceType: "onboarding",
          metadata: {
            onboarding: false,
          },
        })
      }
    }
  }, [router, experiences, isSuccess, isExperiencesLoading, mutate])

  const spinning =
    isCreatingWallet ||
    isFetching ||
    isLoading ||
    isAuthFetching ||
    isAuthLoading ||
    isLoggingIn

  return (
    <Button
      className={className}
      onClick={onClick}
      disabled={spinning}
      {...props}>
      {spinning && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!data ? "Join the Waitlist" : "View Status"}
    </Button>
  )
}

export default GetStartedButton
