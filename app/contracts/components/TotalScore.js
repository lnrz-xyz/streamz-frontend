"use client"

import { useScore } from "@/hooks/useScore"

const TotalScore = () => {
  const { data: score } = useScore()

  const totalScore = score?.reasons["streamz nfts"]?.score

  if (!totalScore) return null

  return (
    <div className="flex flex-row">
      <p className="text-2xl font-bold">{totalScore}</p>
      <p className="text-neutral-300 text-2xl font-bold">pts</p>
    </div>
  )
}

export default TotalScore
