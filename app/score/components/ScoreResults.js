"use client"
import Image from "next/image"
import { useScore } from "@/hooks/useScore"
import { toast } from "sonner"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

const ScoreResults = () => {
  const { data: score, error } = useScore()

  useEffect(() => {
    if (error) {
      toast.error("Failed to load score " + error)
    }
  }, [error])

  if (!score) {
    return <Loader2 className="animate-spin" size={64} />
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full space-y-8 md:space-x-8 md:space-y-0">
      <div className="relative w-1/3 aspect-square">
        <Image
          src="/score-example.png"
          alt="Score Example"
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-row items-center w-1/3"></div>
      <div className="flex flex-col items-center w-1/3"></div>
    </div>
  )
}

export default ScoreResults
