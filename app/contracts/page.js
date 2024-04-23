import Header from "@/app/components/Header"
import ConnectButton from "@/app/components/ConnectButton"
import Footer from "@/app/components/Footer"
import Contracts from "./components/Contracts"

/*
type GetTokenInfoResponse struct {
	TotalSupply  string `json:"totalSupply"`
	TotalHolders string `json:"totalHolders"`
	MarketCap    string `json:"marketCap"`
	USDPrice     string `json:"usdPrice"`
}
*/
export default async function contracts() {
  const contractsResp = await fetch(`${process.env.API_URL}/contracts`, {
    cache: "no-store",
  })
  const { contracts } = await contractsResp.json()
  const infoResp = await fetch(`${process.env.API_URL}/info`, {
    cache: "no-store",
  })
  const { totalHolders } = await infoResp.json()

  return (
    <main className="relative flex w-screen min-h-screen flex-col pb-16">
      <div className="absolute top-4 right-8 z-10">
        <ConnectButton />
      </div>
      <div className="min-h-screen">
        <Header holderCount={totalHolders} />
        <Contracts contracts={contracts} />
      </div>

      <Footer />
    </main>
  )
}
