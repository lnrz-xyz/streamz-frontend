"use client"

import { useEffect, useState } from "react"
import ConnectOrScoreButton from "./ConnectOrScoreButton"

const PurchaseToken = () => {
  const [timeuntil, setTimeuntil] = useState(8640000)

  useEffect(() => {
    const startTime = new Date("2024-12-31T23:59:59").getTime()
    const setter = setInterval(() => {
      setTimeuntil(startTime - Date.now())
    }, 1000)

    return () => clearInterval(setter)
  }, [])

  return (
    <div id="buy" className="flex flex-col space-y-8">
      {/* backdrop blur */}

      <div className="flex flex-col h-full w-full items-center justify-center space-y-8">
        {/* countdown overlay */}
        <h2 className="text-4xl font-bold">Token Launch</h2>
        <div className="flex flex-col items-center justify-start">
          {/* days, hours, minutes, seconds */}
          <div className="flex flex-row items-center justify-evenly">
            <div className="text-4xl font-bold border-r border-zinc-400 text-center w-24">
              {Math.floor(timeuntil / (1000 * 60 * 60 * 24))}
            </div>
            <div className="text-4xl font-bold border-r border-zinc-400 text-center w-24">
              {Math.floor(
                (timeuntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              )}
            </div>
            <div className="text-4xl font-bold border-r border-zinc-400 text-center w-24">
              {Math.floor((timeuntil % (1000 * 60 * 60)) / (1000 * 60))}
            </div>
            <div className="text-4xl font-bold text-center w-24">
              {Math.floor((timeuntil % (1000 * 60)) / 1000)}
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <div className="text-zinc-400 text-xl font-normal text-center w-24">
              Days
            </div>
            <div className="text-zinc-400 text-xl font-normal text-center w-24">
              Hours
            </div>
            <div className="text-zinc-400 text-xl font-normal text-center w-24">
              Minutes
            </div>
            <div className="text-zinc-400 text-xl font-normal text-center w-24">
              Seconds
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center pt-8">
          <h3 className="text-lg font-bold">
            Connect wallet to determine airdrop eligibility
          </h3>
          <ConnectOrScoreButton className="bg-primary rounded-full px-4 py-2 text-xl font-bold" />
        </div>
      </div>

      <div className="relative">
        <div className="backdrop-blur-[2px] w-full p-6 absolute h-14 top-0 left-0 z-10"></div>
        <div className="absolute flex flex-row items-center space-x-8 w-full z-0 justify-center h-14 top-0 left-0">
          <div className="bg-primary rounded-full px-4 py-1 text-lg font-bold">
            Buy
          </div>
          <div className="border border-zinc-400 rounded-full px-4 py-1 text-lg font-bold">
            Sell
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseToken
