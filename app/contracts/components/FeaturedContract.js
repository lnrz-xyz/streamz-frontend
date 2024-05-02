import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { fixedPlaceholder } from "./Contracts"

const FeaturedContract = ({ contract }) => {
  return (
    <a
      href={
        contract.metadata.mintLink ||
        `https://mint.fun/base/${contract.contractAddress}`
      }
      target="_blank"
      rel="noreferrer"
      key={contract.contractAddress}
      className="flex flex-col space-y-2 group relative items-center h-80 md:w-1/3 roundex-2xl overflow-hidden">
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image
          src={
            contract.metadata.imageUrl ||
            fixedPlaceholder(contract.contractAddress)
          }
          alt={contract.metadata.name}
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-0 flex flex-col items-center space-y-2 bg-gradient-to-t backdrop-blur-lg from-background to-transparent w-full rounded-b-2xl p-4">
        <div className="flex justify-between items-center h-16">
          <h4 className="text-2xl font-bold">{contract.metadata.name}</h4>
          <ArrowUpRight size={24} />
        </div>
        {contract.metadata.description && (
          <p className="text-lg font-normal text-neutral-300 flex flex-row items-center">
            {contract.metadata.description}
          </p>
        )}
      </div>
    </a>
  )
}

export default FeaturedContract
