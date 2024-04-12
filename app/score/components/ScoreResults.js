"use client"
import Image from "next/image"
import { useScore } from "@/hooks/useScore"
import { toast } from "sonner"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"

const ScoreResults = () => {
  const { data: score, error } = useScore()
  const { mutate } = useUpsertExperienceMutation()

  useEffect(() => {
    if (error) {
      toast.error("Failed to load score " + error)
    }
  }, [error])

  useEffect(() => {
    if (score) {
      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })
    }
  }, [score, mutate])

  if (!score) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="animate-spin" size={64} />
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full space-y-8 md:space-x-8 md:space-y-0">
      <div className="flex relative w-4/12 aspect-square">
        <Image
          src="/score-example.png"
          alt="Score Example"
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-row items-center w-5/12 space-x-4">
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-bold">Eligibility Requirements Met</h4>
          <h3 className="text-4xl font-bold">{score}</h3>
          <h3 className="text-4xl font-bold">{score}</h3>
          <h3 className="text-4xl font-bold">{score}</h3>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-bold">Bonus Criteria Met</h4>
          <h3 className="text-4xl font-bold">{score}</h3>
          <h3 className="text-4xl font-bold">{score}</h3>
          <h3 className="text-4xl font-bold">{score}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center w-3/12 space-y-4 ">
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-bold">Your score</h4>
          <h3 className="text-4xl font-bold">{score}</h3>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl font-bold">Top contribution</h4>
          <h3 className="text-4xl font-bold">{score}</h3>
        </div>
      </div>
    </div>
  )
}

export default ScoreResults
