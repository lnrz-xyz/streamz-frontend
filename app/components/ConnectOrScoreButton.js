"use client"
import { useExperiences } from "@/hooks/useExperiences"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAccount } from "wagmi"
import Link from "next/link"
import { cn } from "@/lib/utils"

const ConnectOrScoreButton = ({ className }) => {
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  const {
    data: experiences,
    isSuccess,
    isPending: isExperiencesLoading,
  } = useExperiences()
  const router = useRouter()

  const { mutate } = useUpsertExperienceMutation()

  useEffect(() => {
    console.log("experiences", experiences, isSuccess)
    if (isSuccess && !experiences && !isExperiencesLoading) {
      console.log("experiences none")
      router.push("/score")
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
        router.push("/score")
        mutate({
          experience: "onboarding",
          metadata: {
            onboarding: false,
          },
        })
      }
    }
  }, [router, experiences, isSuccess, isExperiencesLoading, mutate])

  if (address) {
    return (
      <Link href="/score" className={className}>
        Get Score
      </Link>
    )
  }

  return (
    <button
      onClick={open}
      className={cn(
        className,
        "hover:scale-105 transition-transform duration-200"
      )}>
      Connect
    </button>
  )
}

export default ConnectOrScoreButton
