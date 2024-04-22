import Link from "next/link"
import ScoreResults from "./components/ScoreResults"
import Leaderboard from "./components/Leaderboard"

export default async function Score() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <ScoreResults />
      <div className="py-8" />
      <Leaderboard />
      <div className="flex flex-row justify-end w-full">
        <Link href="/">
          <div className="bg-primary rounded-full px-4 py-2 text-xl font-bold justify-end">
            Back Home
          </div>
        </Link>
      </div>
    </main>
  )
}
