import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Community() {
  return (
    <div id="community" className="flex flex-col w-full">
      <h4 className="text-2xl font-bold">Community</h4>
      <div className="flex flex-col md:flex-row justify-between pt-6 w-full md:space-x-16 md:space-y-0 space-y-4">
        <div className="relative md:w-2/3 w-full overflow-hidden rounded-md h-96 md:h-[460px] xl:h-[540px]">
          <Image
            src="/campfire.png"
            alt="artists around a campfire playing music"
            fill
            className="object-cover z-0"
          />
          <div className="w-full h-full z-10 backdrop-brightness-75 absolute" />
          <p className="absolute text-base font-normal bottom-14 left-0 z-20 p-4 w-[75%]">
            What{"'"}s a revolution without a solid crew? When you join us, you
            {"'"}re not just holding a token; you{"'"}re backing a movement to
            rethink music architecture and the development of new music
            applications onchain. Grab your tokens, spread the word, and let
            {"'"}s pump up the volume
          </p>
          <div className="flex flex-row gap-2 absolute bottom-2 left-0 z-20 p-4">
            <a
              href="https://www.figma.com/design/Pw3b5ePgjCh6fZadzYmzmi/Meme-Streamz?node-id=0%3A1&t=AIwhh2Jf1SUegn9H-1"
              target="_blank"
              rel="noreferrer"
              className="underline text-white flex gap-1">
              <p className="text-base font-normal">Media Kit</p>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:w-1/3 w-full">
          <a
            href="https://warpcast.com/~/channel/streamz"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start group relative p-2">
            <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
            <div className="text-base font-normal">1</div>
            <div className="w-11 h-11 bg-violet-500 rounded-lg relative">
              <Image
                src="/farcaster.svg"
                alt="farcaster"
                fill
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">Farcaster</div>
              <div className="text-sm font-normal">streamzonbase</div>
            </div>
          </a>
          <a
            href="https://x.com/streamzonbase"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start group relative p-2">
            <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
            <div className="text-base font-normal">2</div>
            <div className="w-11 h-11 bg-black rounded-lg relative">
              <Image src="/x-logo.svg" alt="x" fill className="p-2" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">X</div>
              <div className="text-sm font-normal">streamzonbase</div>
            </div>
          </a>
          <a
            href={`https://basescan.org/address/${process.env.STREAMZ_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start group relative p-2">
            <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
            <div className="text-base font-normal">3</div>
            <div className="w-11 h-11 rounded-lg relative">
              <Image src="/base-logo.svg" alt="x" fill className="p-1" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">Base</div>
              <div className="text-sm font-normal">STRM</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
