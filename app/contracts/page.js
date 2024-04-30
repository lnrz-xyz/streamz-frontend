import Contracts from "./components/Contracts"
import FeaturedContracts from "./components/FeaturedContracts"
import Nav from "../components/Nav"

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

  const featuredResp = await fetch(
    `${process.env.API_URL}/contracts/featured`,
    {
      cache: "no-store",
    }
  )

  const { featuredContracts } = await featuredResp.json()

  return (
    <main className="relative flex w-screen min-h-screen flex-col pb-48">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-2 h-11">
        <Nav />
      </div>
      <div className="min-h-screen flex flex-col space-y-24">
        <FeaturedContracts featuredContracts={featuredContracts} />
        <Contracts contracts={contracts} />
      </div>
    </main>
  )
}
