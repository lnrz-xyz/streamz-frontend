import Header from "@/app/components/Header"
import Opener from "@/app/components/Opener"
import Community from "@/app/components/Community"

export default async function Home() {
  const info = await fetch(`${process.env.API_URL}/info?forceRefresh=true`, {
    cache: "no-store",
  })
  const data = await info.json()

  const { totalSupply, totalHolders, marketCap, usdPrice } = data

  return (
    <main className="relative flex min-h-screen flex-col pb-16 p-8 w-full">
      <Header />

      <Opener
        marketCap={marketCap}
        priceUSD={usdPrice}
        totalSupply={totalSupply}
        holderCount={totalHolders}
      />

      <div className="flex flex-col px-8 py-16 pb-16 gap-16">
        <Community />
      </div>
    </main>
  )
}
