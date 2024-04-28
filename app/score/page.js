import Link from "next/link"
import ScoreResults from "./components/ScoreResults"
import Leaderboard from "./components/Leaderboard"
import Directions from "./components/Directions"
import HomeButton from "../components/HomeButton"
import ConnectButton from "../components/ConnectButton"

export default async function Score() {
  const contractsResp = await fetch(`${process.env.API_URL}/contracts`, {
    cache: "no-store",
  })
  const { contracts } = await contractsResp.json()
  return (
    <main className="min-h-screen flex flex-col items-center justify-center mx-8 space-y-4 relative">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-2 h-11">
        <HomeButton />
        <ConnectButton />
      </div>
      <ScoreResults />
      <Directions contracts={contracts} />
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
