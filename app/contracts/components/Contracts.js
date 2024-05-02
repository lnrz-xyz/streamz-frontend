import Contract from "@/app/components/Contract"
import { Info } from "lucide-react"
export const fixedPlaceholder = contractAddress => {
  // parse contract address as a number and modulo by the 5 placeholders
  const placeholderIndex = parseInt(contractAddress, 16) % 5
  return `/score-${placeholderIndex + 1}.png`
}

export default function Contracts({ contracts }) {
  return (
    <div className="flex flex-col space-y-4 w-full px-4 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h4 className="text-2xl font-bold">Collections</h4>
        </div>
        <p className="text-lg font-normal text-neutral-300 flex flex-row items-center">
          <Info size={16} className="mr-2" />
          Newly created collections may take between 10-45 minutes to appear
          here.
        </p>
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
      <div className="flex flex-col md:flex-row gap-2.5 w-full flex-wrap">
        {contracts?.map((contract, index) => (
          <Contract key={contract.address + index} contract={contract} />
        ))}
      </div>
    </div>
  )
}
