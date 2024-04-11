import Image from "next/image"
import Link from "next/link"

export default function Opener() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-neutral-700 to-black backdrop-blur-[79.60px] h-full w-full p-6">
      <div className="flex flex-row space-x-8 h-14 w-full items-center justify-start">
        <Link href="/" className="relative h-full w-14">
          <Image
            src="/logo.svg"
            alt="Streamz logo"
            fill
            className="aspect-square object-contain"
          />
        </Link>

        <div className="flex flex-row space-x-6 items-center justify-start">
          <a
            href="https://warpcast.com/streamz"
            target="_blank"
            rel="noreferrer"
            className="border-zinc-400 border rounded-full px-2 py-1 text-sm font-bold justify-center items-center gap-2.5 inline-flex">
            Follow Us On
            <div className="relative h-[18px] w-[17px]">
              <Image
                src="/farcaster.svg"
                alt="Farcaster logo"
                fill
                className="aspect-square object-contain"
              />
            </div>
          </a>
          <a
            href="https://x.com/streamzonbase"
            target="_blank"
            rel="noreferrer"
            className="relative h-[18px] w-[17px]">
            <Image
              src="/x-logo.svg"
              alt="X logo"
              fill
              className="aspect-square object-contain"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-6 w-full md:space-x-16 space-y-16 md:space-y-0">
        <div className="flex flex-col w-full md:w-2/3 space-y-5">
          <h4 className="text-2xl font-bold">Directory</h4>
          <div className="flex flex-col md:flex-row space-y-4 space-x-4 px-5 w-full justify-between">
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Link
                  href="#"
                  className="flex flex-row space-x-4 items-center w-1/2">
                  <div className="text-base font-normal">1</div>
                  <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                    <Image
                      src="/question.png"
                      alt="About Us Image"
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-bold">About Us</div>
                </Link>
                <Link
                  href="#"
                  className="flex flex-row justify-between items-center w-1/2">
                  <div className="text-zinc-400 text-sm font-normal">
                    Learn about the project
                  </div>
                  <div className="relative h-4 w-4">
                    <Image
                      src="/external.svg"
                      alt="link"
                      fill
                      className="aspect-square object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Link
                  href="#buy"
                  className="flex flex-row space-x-4 items-center">
                  <div className="text-base font-normal">2</div>
                  <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                    <Image
                      src="/buy.png"
                      alt="Buy Image"
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-bold">Buy</div>
                </Link>
                <Link
                  href="#buy"
                  className="flex flex-row justify-between items-center w-1/2">
                  <div className="text-zinc-400 text-sm font-normal">
                    Purchase the token
                  </div>
                  <div className="relative h-4 w-4">
                    <Image
                      src="/external.svg"
                      alt="link"
                      fill
                      className="aspect-square object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Link
                  href="#tokenomics"
                  className="flex flex-row space-x-4 items-center">
                  <div className="text-base font-normal">3</div>
                  <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                    <Image
                      src="/pie-chart.png"
                      alt="Tokenomics Image"
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-bold">Tokenomics</div>
                </Link>
                <Link
                  href="#tokenomics"
                  className="flex flex-row justify-between items-center w-1/2">
                  <div className="text-zinc-400 text-sm font-normal">
                    Understand distribution
                  </div>
                  <div className="relative h-4 w-4">
                    <Image
                      src="/external.svg"
                      alt="link"
                      fill
                      className="aspect-square object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Link
                  href="#community"
                  className="flex flex-row space-x-4 items-center">
                  <div className="text-base font-normal">4</div>
                  <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                    <Image
                      src="/community.png"
                      alt="Community Image"
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-bold">Community</div>
                </Link>
                <Link
                  href="#community"
                  className="flex flex-row justify-between items-center w-1/2">
                  <div className="text-zinc-400 text-sm font-normal">
                    Join the conversation
                  </div>
                  <div className="relative h-4 w-4">
                    <Image
                      src="/external.svg"
                      alt="link"
                      fill
                      className="aspect-square object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Link
                  href="#airdrop"
                  className="flex flex-row space-x-4 items-center">
                  <div className="text-base font-normal">5</div>
                  <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                    <Image
                      src="/airdrop.png"
                      alt="Airdrop Image"
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-base font-bold">Airdrop</div>
                </Link>
                <Link
                  href="#airdrop"
                  className="flex flex-row justify-between items-center w-1/2">
                  <div className="text-zinc-400 text-sm font-normal">
                    Earn for supporting artists
                  </div>
                  <div className="relative h-4 w-4">
                    <Image
                      src="/external.svg"
                      alt="link"
                      fill
                      className="aspect-square object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <h4 className="text-2xl font-bold">About</h4>
          <p className="text-base font-normal">
            We are a community of artists, developers and music fans on Base.
            We’re on a mission to eclipse Spotify.
          </p>
          <p className="text-base font-normal">
            The Green Giant distributes roughly 70
            <span className="text base font-normal font-['Inter']">%</span> of
            their revenue to pay creators.
          </p>
          <p className="text-base font-normal">
            In their world 1M Streams{" "}
            <span className="text base font-normal font-['Inter']"> = ~ $</span>
            3700.
          </p>
          <p className="text-base font-normal">
            How much can 1M Streamz be worth onchain?
          </p>
        </div>
      </div>
    </div>
  )
}
