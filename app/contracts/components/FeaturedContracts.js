import TotalScore from "./TotalScore"
import FeaturedContract from "./FeaturedContract"
import Link from "next/link"
import CreateButtons from "./CreateButtons"

export default function FeaturedContracts({ featuredContracts }) {
  return (
    <div className="flex flex-col space-y-4 w-full px-4 pb-4 bg-gradient-to-b from-neutral-700 to-background-100 backdrop-blur-[79.60px]">
      <div className="flex flex-col items-center justify-center space-y-8 px-56 pt-36">
        <h2 className="text-center text-green-500 text-8xl font-bold">
          Collect on Streamz
        </h2>
        <p className="text-center text-base">
          The more Streamz derivatives you collect, the more points you earn
          towards the next airdrop. Collecting Sound NFTs will earn you an extra
          boost in points. Create NFTs and add Streamz as a split on 0x to earn
          even more points.
        </p>

        <CreateButtons />
      </div>
      <div className="flex flex-col space-y-4 w-full pt-24">
        <h3 className="text-2xl font-bold">Featured</h3>
        <div className="flex flex-row space-x-2">
          {featuredContracts?.map(contract => (
            <FeaturedContract
              key={contract.contractAddress}
              contract={contract}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
