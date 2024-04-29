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
    <main className="relative flex w-screen min-h-screen flex-col pb-48">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-2 h-11">
        <HomeButton />
        <ConnectButton />
      </div>
      <div className="flex flex-col gap-2.5 pb-32">
        <ScoreResults />
        <Directions contracts={contracts} />
      </div>
      <Leaderboard />
    </main>
  )
}
