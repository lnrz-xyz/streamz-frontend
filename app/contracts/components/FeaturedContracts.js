import TotalScore from "./TotalScore"
import FeaturedContract from "./FeaturedContract"

export default function FeaturedContracts({ featuredContracts }) {
  return (
    <div className="flex flex-col space-y-4 w-full px-4 pb-4 bg-gradient-to-b from-neutral-700 to-background-100 backdrop-blur-[79.60px] pt-48">
      <h3 className="text-2xl font-bold">Featured</h3>
      <div className="flex flex-row space-x-2">
        {featuredContracts?.map(contract => (
          <FeaturedContract
            key={contract.contractAddress}
            contract={contract}
          />
        ))}
      </div>
      <div className="flex w-full h-16 p-4 bg-neutral-800 rounded-lg flex-row justify-between items-center">
        <div className="flex-col justify-start items-start flex">
          <div className=" text-sm font-bold">
            Collect NFTs to increase your score
          </div>
          <div className="text-sm">
            Collect Artist NFTs created through Zora or Sound.xyz to build up
            your score to help contribute to your airdrop
          </div>
        </div>

        <TotalScore />
      </div>
    </div>
  )
}
