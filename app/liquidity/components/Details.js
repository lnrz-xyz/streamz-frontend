export default function Details() {
  return (
    <div className="flex flex-col gap-2.5 w-full px-4 pb-4 bg-gradient-to-b from-[#4100f4] to-background-100 backdrop-blur-[79.60px]">
      <div className="flex flex-col items-center justify-center space-y-8 md:px-56 pt-36">
        <h2 className="text-center text-foreground text-8xl font-bold">
          Liquidity Mining
        </h2>
        <p className="text-center text-lg">
          Adding liquidity to our{" "}
          <a
            href={`https://app.uniswap.org/add/base:${process.env.STREAMZ_ADDRESS}/ETH/3000?chain=base`}
            target="_blank"
            rel="noreferrer"
            className="font-bold underline">
            Uniswap Pool
          </a>{" "}
          will cumulatively earn you points towards the next airdrop. The more
          liquidity you add, the more points you earn.
        </p>
        <p className="text-center text-base text-neutral-400">
          Liquidity positions are recalculated weekly on Sunday 12AM UTC.
        </p>
        <a
          href={`https://app.uniswap.org/add/base:${process.env.STREAMZ_ADDRESS}/ETH/3000?chain=base`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center justify-center bg-foreground text-background p-4 rounded-full">
          <p className="text-lg font-bold">Add Liquidity</p>
        </a>
      </div>
    </div>
  )
}
