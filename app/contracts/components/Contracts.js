import Image from "next/image"
import ContractScorePill from "./ContractScorePill"
import ContractCollectedBadge from "./ContractCollectedBadge"
import TotalScore from "./TotalScore"
import Contract from "@/app/components/Contract"
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
      <div className="flex items-center flex-col md:flex-row gap-2.5 w-full flex-wrap">
        {contracts?.map((contract, index) => (
          <Contract
            key={contract.address + index}
            contract={contract}
            imageClassName={"w-32"}
          />
        ))}
      </div>
    </div>
  )
}
