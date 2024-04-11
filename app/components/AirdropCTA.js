export default function AirdropCTA() {
  return (
    <div
      id="airdrop"
      className="flex flex-col md:flex-row justify-between items-center bg-primary h-[30vh] w-full px-8">
      <h2 className="text-5xl font-bold">
        Ready to claim your tokens for the airdrop
        <span className="font-['Inter']">?</span>
      </h2>
      <button className="bg-foreground text-accent rounded-full px-4 py-2 text-xl font-bold">
        Connect Wallet
      </button>
    </div>
  )
}
