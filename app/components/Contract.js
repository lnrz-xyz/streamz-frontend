import Image from "next/image"

import ContractScorePill from "../contracts/components/ContractScorePill"
import { fixedPlaceholder } from "../contracts/components/Contracts"

import ContractFrameButton from "./ContractFrameButton"

export default function Contract({
  contract,
  showDescription = false,
  ...props
}) {
  return (
    <div
      key={contract.contractAddress}
      className="flex flex-col z-0 space-y-2 group items-center md:w-72 w-full relative transform hover:scale-105 transition-transform duration-200"
      {...props}>
      <a
        href={
          contract.metadata.mintLink ||
          `https://mint.fun/base/${contract.contractAddress}`
        }
        target="_blank"
        rel="noreferrer"
        className="relative h-full w-full rounded-2xl overflow-hidden aspect-square">
        <div className="absolute top-2 right-2 z-10">
          <ContractScorePill contractAddress={contract.contractAddress} />
        </div>

        <Image
          src={
            contract.metadata.imageUrl ||
            fixedPlaceholder(contract.contractAddress)
          }
          alt={contract.metadata.name}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-2 right-2 flex flex-row space-x-2 bg-foreground text-background rounded-full px-5 p-2 self-start">
          <p className="text-sm font-bold">Mint</p>
        </div>
      </a>
      <div className="flex flex-col space-y-1 relative w-full pb-2">
        <div className="flex flex-row items-center justify-between">
          <div className="text-base font-bold">
            {contract.metadata.name || contract.contractAddress.slice(0, 6)}
          </div>
          <ContractFrameButton
            contractAddress={contract.contractAddress}
            tokenID={contract.tokenID}
          />
        </div>
        {contract.metadata.description && showDescription && (
          <div className="text-sm font-normal">
            {contract.metadata.description}
          </div>
        )}
      </div>
    </div>
  )
}
