import Link from "next/link"
import ScoreResults from "./components/ScoreResults"

export default function Score() {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-8 py-4">
      <ScoreResults />
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
