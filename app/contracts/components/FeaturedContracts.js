import TotalScore from "./TotalScore"
import FeaturedContract from "./FeaturedContract"
import Link from "next/link"
import CreateButtons from "./CreateButtons"
import { ArrowUpRight } from "lucide-react"

export default function FeaturedContracts({ featuredContracts }) {
  return (
    <div className="flex flex-col gap-2.5 w-full px-4 pb-4 bg-gradient-to-b from-neutral-700 to-background-100 backdrop-blur-[79.60px]">
      <div className="flex flex-col items-center justify-center space-y-8 md:px-56 pt-36">
        <h2 className="text-center text-green-500 text-8xl font-bold">
          Collect on Streamz
        </h2>
        <div className="flex items-center flex-col gap-1">
          <p className="text-center text-lg">
            The more Streamz derivatives you collect, the more points you earn
            towards the next airdrop. Collecting Sound NFTs will earn you an
            extra boost in points. Create NFTs and add Streamz as a split on 0x
            to earn even more points.
          </p>
          <div className="flex flex-row gap-2 p-4">
            <a
              href="https://www.figma.com/design/Pw3b5ePgjCh6fZadzYmzmi/Meme-Streamz?node-id=0%3A1&t=AIwhh2Jf1SUegn9H-1"
              target="_blank"
              rel="noreferrer"
              className="underline text-white flex gap-1">
              <p className="text-lg font-normal">Media Kit</p>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <CreateButtons />
      </div>
      <div className="flex flex-col space-y-4 w-full pt-24">
        <h3 className="text-2xl font-bold">Featured</h3>
        <div className="flex flex-col md:flex-row gap-2.5">
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
