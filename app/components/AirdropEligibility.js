"use client"

const { Link, Gem } = require("lucide-react")
const { useAccount } = require("wagmi")

const AirdropEligibility = () => {
  const { account } = useAccount()
  if (!account) return null
  return (
    <Link href="/score" className="flex flex-row space-x-1 items-center">
      <Gem />
      <h4 className="text-lg font-bold">Airdrop Eligibility</h4>
    </Link>
  )
}

export default AirdropEligibility
