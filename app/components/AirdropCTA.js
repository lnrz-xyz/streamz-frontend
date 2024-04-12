import ConnectOrScoreButton from "./ConnectOrScoreButton"

export default function AirdropCTA() {
  return (
    <div
      id="airdrop"
      className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between items-center bg-primary md:py-16 w-full px-8 py-4">
      <h2 className="md:text-5xl text-3xl font-bold">
        Ready to check your eligibility for the airdrop
        <span className="font-['system-ui']">?</span>
      </h2>
      <ConnectOrScoreButton className="bg-foreground text-accent rounded-full px-4 py-2 text-xl font-bold" />
    </div>
  )
}
