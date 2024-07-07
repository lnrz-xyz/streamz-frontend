import ClaimButton from "./ClaimButton"

export default function Header() {
  return (
    <div className="z-0 relative flex flex-col items-center justify-center px-8 py-8 bg-gradient-to-b from-green-500 to-primary min-h-[50vh] text-white gap-4 rounded-lg h-[80vh] md:h-[612px]">
      <div className="flex flex-col gap-2 max-w-xl">
        <h1 className="font-black text-8xl tracking-tighter text-center">
          Streamz
        </h1>
        <h3 className="text-center text-white text-base font-normal">
          Redefining the notion of onchain music communities with a focus on
          creator empowerment. Redefining the notion of onchain music
          communities with a focus on creator empowerment. Redefining the notion
          of onchain music communities with a focus on creator empowerment.
        </h3>
      </div>
      <div className="flex flex-row gap-4">
        <div className="justify-center items-start gap-2 inline-flex text-white text-base font-bold">
          <a
            href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full border border-white justify-center items-center flex">
            Buy STRM
          </a>
          <ClaimButton />
        </div>
      </div>
    </div>
  )
}
