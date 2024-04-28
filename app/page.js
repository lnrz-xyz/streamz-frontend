import Header from "@/app/components/Header"
import Opener from "@/app/components/Opener"
import Tokenomics from "@/app/components/Tokenomics"
import Community from "@/app/components/Community"
import ConnectButton from "@/app/components/ConnectButton"
import AirdropCTA from "./components/AirdropCTA"
import Footer from "./components/Footer"
import { Diamond, Gem } from "lucide-react"
import Link from "next/link"
import AirdropEligibility from "./components/AirdropEligibility"

/*
type GetTokenInfoResponse struct {
	TotalSupply  string `json:"totalSupply"`
	TotalHolders string `json:"totalHolders"`
	MarketCap    string `json:"marketCap"`
	USDPrice     string `json:"usdPrice"`
}
*/
export default async function Home() {
  const info = await fetch(`${process.env.API_URL}/info`, { cache: "no-store" })
  const data = await info.json()

  const { totalSupply, totalHolders, marketCap, usdPrice, contractCount } = data

  return (
    <main className="relative flex w-screen min-h-screen flex-col pb-16">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-4 items-center">
        <AirdropEligibility />
        <ConnectButton />
      </div>
      <div className="min-h-screen">
        <Header holderCount={totalHolders} />
        <Opener
          marketCap={marketCap}
          priceUSD={usdPrice}
          totalSupply={totalSupply}
          contractCount={contractCount}
        />
      </div>
      <div className="flex flex-col px-8 py-16 pb-16 space-y-28 w-full">
        <Tokenomics />
        <Community />
      </div>
      <div className="w-full flex flex-row items-center justify-between p-4 fixed bottom-0 bg-gradient-to-r from-fuchsia-700 to-blue-400 z-50">
        <div className="flex flex-col">
          <h4 className="text-sm font-bold">Get your score</h4>
          <p className="text-sm">
            Connect your wallet and contribute to the bounties to get your
            score. Farm new bounties to increase your score for the airdrop
          </p>
        </div>
        <Link
          href="/score"
          className="rounded-full px-3 py-2 bg-foreground text-background flex items-center">
          <h4 className="text-sm font-bold">Get Your Score</h4>
        </Link>
      </div>
    </main>
  )
}
