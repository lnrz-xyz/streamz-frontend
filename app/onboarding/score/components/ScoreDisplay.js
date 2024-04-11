"use client"

import { useUpsertexperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const { useScore } = require("@/hooks/useScore")

const ScoreDisplay = () => {
  const { data: score, error } = useScore()

  const [scoreDisplay, setScoreDisplay] = useState(null)

  const { mutate } = useUpsertexperienceMutation()

  useEffect(() => {
    if (score) {
      // make the score run up from 0 to the actual score but make sure to jump in reasonable intervals so the user doesn't have to wait too long
      let i = 0
      const increment = Math.ceil(score / 100)
      const interval = setInterval(() => {
        if (i + increment > score) {
          i = score
        } else {
          i += increment
        }
        setScoreDisplay(i)
        if (i === score) {
          clearInterval(interval)
        }
      }, 10)

      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })
    }
  }, [mutate, score])

  useEffect(() => {
    if (error) {
      toast.error("Failed to load score " + error)
    }
  }, [error])

  if (error) {
    return <h2 className="text-lg font-sans">Failed to load score</h2>
  }

  if (!scoreDisplay) {
    return <Loader2 className="animate-spin" size={64} />
  }

  return (
    <>
      <div className="flex flex-col justify-between items-center h-full space-y-16">
        <h4 className="text-4xl font-serif font-semibold">Your Score</h4>
        <h1 className="text-6xl font-serif font-semibold">{scoreDisplay}</h1>
      </div>
    </>
  )
}

export default ScoreDisplay
