import Header from "@/app/components/Header"
import Opener from "@/app/components/Opener"
import Tokenomics from "@/app/components/Tokenomics"
import Community from "@/app/components/Community"
import ConnectButton from "@/app/components/ConnectButton"
import AirdropCTA from "./components/AirdropCTA"
import Footer from "./components/Footer"
import { Diamond, Gem } from "lucide-react"
import Link from "next/link"

/*
type GetTokenInfoResponse struct {
	TotalSupply  string `json:"totalSupply"`
	TotalHolders string `json:"totalHolders"`
	MarketCap    string `json:"marketCap"`
	USDPrice     string `json:"usdPrice"`
}
*/
export default async function Home() {
  const info = await fetch(`${process.env.API_URL}/info`)
  const data = await info.json()

  const { totalSupply, totalHolders, marketCap, usdPrice } = data

  return (
    <main className="relative flex w-screen min-h-screen flex-col pb-16">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-4 items-center">
        <Link href="/score" className="flex flex-row space-x-1 items-center">
          <Gem />
          <h4 className="text-lg font-bold">Airdrop Eligibility</h4>
        </Link>
        <ConnectButton />
      </div>
      <div className="min-h-screen">
        <Header holderCount={totalHolders} />
        <Opener
          marketCap={marketCap}
          priceUSD={usdPrice}
          totalSupply={totalSupply}
        />
      </div>
      <div className="flex flex-col px-8 py-16 pb-16 space-y-28 w-full">
        <Tokenomics />
        <Community />
      </div>
      <AirdropCTA />
      <Footer />
    </main>
  )
}
