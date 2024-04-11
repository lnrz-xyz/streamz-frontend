import Image from "next/image"
export default function Tokenomics() {
  return (
    <div id="tokenomics" className="flex flex-col space-y-4 w-full">
      <h4 className="text-2xl font-bold">Tokenomics</h4>
      <div className="flex flex-col md:flex-row space-x-3 px-10 overflow-x-scroll no-scrollbar">
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/hand-shake.png"
              alt="two hands shaking album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Initial Community Airdrop</div>
            <div className="text-sm font-normal">
              20<span className="text-sm font-normal font-['Inter']">%</span> of
              the supply will be airdropped to those who connect their wallets
              to the site and meet the eligibility requirements or participate
              in the community
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/zeppelin.png"
              alt="air zeppelin album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Future Airdrop</div>
            <div className="text-sm font-normal">
              40<span className="text-sm font-normal font-['Inter']">%</span> of
              the supply will be reserved for future airdrops, potentially
              rewarding community activity, contributions, and engagement as
              well as supporting up and coming artists.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/pool.png"
              alt="man sitting by a pool album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Liquiditiy Pool</div>
            <div className="text-sm font-normal">
              15<span className="text-sm font-normal font-['Inter']">%</span> of
              the supply will be reserved for seeding liquidity pools.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/mo-money.png"
              alt="100$ bills album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Provider Rewards</div>
            <div className="text-sm font-normal">
              10<span className="text-sm font-normal font-['Inter']">%</span> of
              the supply will be reserved for those who provide liquidity in our
              seed pools. Wallets that provide liquidity to the Uniswap pool
              will be rewarded based on activity.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/rocket.png"
              alt="rocket launch album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Launch Team</div>
            <div className="text-sm font-normal">
              0.69<span className="text-sm font-normal font-['Inter']">%</span>{" "}
              of the supply will be reserved for the launch team. This small
              number is to ensure the team is incentivized to grow the project
              and community.
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/growth.png"
              alt="people walking around in an empty space album cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Ecosystem Growth</div>
            <div className="text-sm font-normal">
              14.31<span className="text-sm font-normal font-['Inter']">%</span>{" "}
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
