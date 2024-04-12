import Image from "next/image"

export default function Community() {
  return (
    <div id="community" className="flex flex-col w-full">
      <h4 className="text-2xl font-bold">Community</h4>
      <div className="flex flex-col md:flex-row justify-between md:items-center pt-6 w-full md:space-x-16 md:space-y-0 space-y-4">
        <div className="relative md:w-2/3 w-full overflow-hidden rounded-md h-96 md:h-[460px] xl:h-[540px]">
          <Image
            src="/closeup.png"
            alt="closeup of artist"
            fill
            className="object-cover z-0"
          />
          <div className="w-full h-full z-10 backdrop-brightness-50 absolute" />
          <p className="w-full absolute text-base font-normal bottom-0 left-0 z-20 p-4">
            The community is the heart of the project. We are building a
            community of artists, creators, and fans who are passionate about
            music and supporting artists in a fair way. We are committed to
            building a community that is inclusive, diverse, and supportive of
            all artists. Join us on this journey and help us build a community
            that celebrates music and creativity.
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:w-1/3 w-full">
          <a
            href="https://warpcast.com/streamz"
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
              <div className="text-sm font-normal">streamz</div>
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
            href="https://basescan.org/"
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
              <div className="text-sm font-normal">STRMZ</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
