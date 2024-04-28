import Image from "next/image"
import ContractScorePill from "./ContractScorePill"
import ContractCollectedBadge from "./ContractCollectedBadge"
import TotalScore from "./TotalScore"
export const fixedPlaceholder = contractAddress => {
  // parse contract address as a number and modulo by the 5 placeholders
  const placeholderIndex = parseInt(contractAddress, 16) % 5
  return `/score-${placeholderIndex + 1}.png`
}

export default function Contracts({ contracts }) {
  return (
    <div className="flex flex-col space-y-4 w-full px-4 py-4">
      <div className="flex flex-row justify-between">
        <h4 className="text-2xl font-bold">Collections</h4>
        <TotalScore />
      </div>
      {(!contracts || contracts?.length === 0) && (
        <div className="text-lg font-normal text-zinc-400">
          No mints yet. Be the first to create with Streamz by going to{" "}
          <a
            href="https://zora.co"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold">
            zora.co
          </a>{" "}
          or{" "}
          <a
            href="https://sound.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold">
            sound.xyz
          </a>
          , creating a collection, and adding us as an 0xSplit.
        </div>
      )}
      <div className="flex flex-col md:flex-row space-x-3 w-full flex-wrap">
        {contracts?.map((contract, index) => (
          <a
            href={`https://mint.fun/base/${contract.contractAddress}`}
            target="_blank"
            rel="noreferrer"
            key={contract.contractAddress}
            className="flex flex-col z-0 space-y-2 group py-2 px-4 items-center w-64 relative">
            <div className="absolute top-6 right-6 z-10">
              <ContractScorePill contractAddress={contract.contractAddress} />
            </div>
            <div className="absolute top-6 left-6 z-10">
              <ContractCollectedBadge
                contractAddress={contract.contractAddress}
              />
            </div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden aspect-square">
              <Image
                src={
                  contract.metadata.imageUrl ||
                  fixedPlaceholder(contract.contractAddress)
                }
                alt={contract.metadata.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col space-y-1 relative w-full pb-2">
              <div className="text-base font-bold">
                {contract.metadata.name || contract.contractAddress}
              </div>
              {contract.metadata.description && (
                <div className="text-sm font-normal">
                  {contract.metadata.description}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
