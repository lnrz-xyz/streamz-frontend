"use client"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useAddressLeaderboard } from "@/hooks/useAddressLeaderboard"
import { useScore } from "@/hooks/useScore"

const Leaderboard = () => {
  const { data: leaderboard, isPending } = useAddressLeaderboard()

  if (isPending) {
    return null
  }

  return (
    <div className="flex flex-col min-h-full w-full">
      <h4 className="text-2xl font-bold">Leaderboard</h4>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:px-5 w-full justify-between pt-4">
        <div className="flex flex-col w-full">
          {leaderboard.leaderboard?.map((position, index) => {
            console.log("position", position)
            if (!position.address) {
              return null
            }
            return (
              <div key={`${index}-leaderboard`} className="relative h-14 group">
                <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                <a
                  href={`https://basescan.org/address/${position.address}`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                  <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
                    <div className="text-base font-normal w-4">{index + 1}</div>
                    <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                      <Image
                        src={`/score-${Math.floor(Math.random() * 5) + 1}.png`}
                        alt="About Us Image"
                        priority
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-base font-bold">
                      {position.address.slice(0, 12)}...
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-1/2">
                    <div className="text-zinc-400 text-sm font-normal">
                      {position.score}
                    </div>

                    <ChevronRight className="text-zinc-400 md:flex hidden" />
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
