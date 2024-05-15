"use client"
import Contract from "@/app/components/Contract"
import clsx from "clsx"
import { Info } from "lucide-react"
import { useState } from "react"
export const fixedPlaceholder = contractAddress => {
  // parse contract address as a number and modulo by the 5 placeholders
  const placeholderIndex = parseInt(contractAddress, 16) % 5
  return `/score-${placeholderIndex + 1}.png`
}

const Contracts = ({ contracts }) => {
  // filter by metadata stringified contains sound.xyz
  const soundContracts = contracts.filter(contract =>
    JSON.stringify(contract.metadata).includes("sound.xyz")
  )
  const others = contracts.filter(
    contract => !JSON.stringify(contract.metadata).includes("sound.xyz")
  )
  const [soundPage, setSoundPage] = useState(0)
  const [otherPage, setOtherPage] = useState(0)
  return (
    <div className="flex flex-col space-y-4 w-full px-4 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center space-x-2">
          <h4 className="text-2xl font-bold">Sound Collections</h4>
          <p className="text-2xl font-bold text-primary">2X XP</p>
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
      <div
        className="flex flex-col md:flex-row gap-2.5 w-full flex-wrap"
        id="sound-contracts">
        {soundContracts
          ?.slice(soundPage * 25, (soundPage + 1) * 25)
          .map((contract, index) => (
            <Contract key={contract.address + index} contract={contract} />
          ))}
      </div>
      {soundContracts.length > 25 && (
        <div className="flex flex-row justify-center space-x-4 pt-4">
          <button
            className={clsx(
              "text-lg font-bold",
              soundPage === 0 ? "text-zinc-400" : "text-primary"
            )}
            onClick={() => {
              setSoundPage(page => page - 1)
              // scroll to top id contracts
              const contracts = document.getElementById("sound-contracts")
              contracts.scrollIntoView({ behavior: "smooth" })
            }}
            disabled={soundPage === 0}>
            Previous
          </button>
          <button
            className="text-lg font-bold text-primary"
            onClick={() => {
              setSoundPage(page => page + 1)
              // scroll to top id contracts
              const contracts = document.getElementById("sound-contracts")
              contracts.scrollIntoView({ behavior: "smooth" })
            }}
            disabled={soundPage === Math.floor(contracts?.length / 25)}>
            Next
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h4 className="text-2xl font-bold">Memes</h4>
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
      <div
        className="flex flex-col md:flex-row gap-2.5 w-full flex-wrap"
        id="other-contracts">
        {others
          ?.slice(otherPage * 25, (otherPage + 1) * 25)
          .map((contract, index) => (
            <Contract key={contract.address + index} contract={contract} />
          ))}
      </div>
      <div className="flex flex-row justify-center space-x-4 pt-4">
        <button
          className={clsx(
            "text-lg font-bold",
            otherPage === 0 ? "text-zinc-400" : "text-primary"
          )}
          onClick={() => {
            setOtherPage(page => page - 1)
            // scroll to top id contracts
            const contracts = document.getElementById("other-contracts")
            contracts.scrollIntoView({ behavior: "smooth" })
          }}
          disabled={otherPage === 0}>
          Previous
        </button>
        <button
          className="text-lg font-bold text-primary"
          onClick={() => {
            setOtherPage(page => page + 1)
            // scroll to top id contracts
            const contracts = document.getElementById("other-contracts")
            contracts.scrollIntoView({ behavior: "smooth" })
          }}
          disabled={otherPage === Math.floor(contracts?.length / 25)}>
          Next
        </button>
      </div>
    </div>
  )
}
export default Contracts
