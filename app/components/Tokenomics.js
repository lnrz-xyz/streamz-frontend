import Image from "next/image"
import PlayButton from "./PlayButton"
export default function Tokenomics() {
  return (
    <div id="tokenomics" className="flex flex-col space-y-4 w-full">
      <h4 className="text-2xl font-bold">Tokenomics</h4>
      <div className="flex flex-col md:flex-row space-x-3 overflow-x-scroll no-scrollbar w-full">
        <div className="flex flex-col space-y-3 group relative py-2 px-4 items-center w-1/5">
          <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
          <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/community.png"
              alt="two hands shaking album cover"
              fill
              className="object-cover"
            />
            <PlayButton audioFileSrc="/audio/Dope Delivery.mp3" />
          </div>
          <div className="flex flex-col space-y-1 relative w-full pb-2">
            <div className="text-base font-bold">Initial Community Airdrop</div>
            <div className="text-sm font-normal">
              20
              <span className="text-sm font-normal font-['system-ui']">
                %
              </span>{" "}
              of the supply will be airdropped to those who connect their
              wallets to the site and meet the eligibility requirements or
              participate in the community
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 group relative py-2 px-4 items-center w-1/5">
          <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
          <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/zeppelin.png"
              alt="air zeppelin album cover"
              fill
              className="object-cover"
            />
            <PlayButton audioFileSrc="/audio/Crypto Raindrops.mp3" />
          </div>
          <div className="flex flex-col space-y-1 relative w-full pb-2">
            <div className="text-base font-bold">Future Airdrop</div>
            <div className="text-sm font-normal">
              40
              <span className="text-sm font-normal font-['system-ui']">
                %
              </span>{" "}
              of the supply will be reserved for future airdrops, potentially
              rewarding community activity, contributions, and engagement as
              well as supporting up and coming artists.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 group relative py-2 px-4 items-center w-1/5">
          <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
          <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/pool.png"
              alt="man sitting by a pool album cover"
              fill
              className="object-cover"
            />
            <PlayButton audioFileSrc="/audio/Liquid Gold.mp3" />
          </div>
          <div className="flex flex-col space-y-1 relative w-full pb-2">
            <div className="text-base font-bold">Liquidity Pool</div>
            <div className="text-sm font-normal">
              15
              <span className="text-sm font-normal font-['system-ui']">
                %
              </span>{" "}
              of the supply will be reserved for seeding liquidity pools. A
              Uniswap pool will be seeded upon launch.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 group relative py-2 px-4 items-center w-1/5">
          <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
          <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/coin.png"
              alt="100$ bills album cover"
              fill
              className="object-cover"
            />
            <PlayButton audioFileSrc="/audio/Liquid Rewards.mp3" />
          </div>
          <div className="flex flex-col space-y-1 relative w-full pb-2">
            <div className="text-base font-bold">Provider Rewards</div>
            <div className="text-sm font-normal">
              10
              <span className="text-sm font-normal font-['system-ui']">
                %
              </span>{" "}
              of the supply will be reserved for those who provide liquidity in
              our seed pools. Wallets that provide liquidity to the Uniswap pool
              will be rewarded based on activity.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 group relative py-2 px-4 items-center w-1/5">
          <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
          <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/rocket.png"
              alt="rocket ship"
              fill
              className="object-cover"
            />
            <PlayButton audioFileSrc="/audio/United Beats.mp3" />
          </div>
          <div className="flex flex-col space-y-1 relative w-full pb-2">
            <div className="text-base font-bold">Ecosystem Growth</div>
            <div className="text-sm font-normal">
              15
              <span className="text-sm font-normal font-['system-ui']">
                %
              </span>{" "}
              of the remaining supply will be reserved for ecosystem and
              community growth. This includes partnerships, collaborations, and
              other growth initiatives.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
