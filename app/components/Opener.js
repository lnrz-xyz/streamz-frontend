import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Opener() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-background opacity-80 backdrop-blur h-64" />

      <div className="flex flex-col h-full w-full p-6 relative">
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
              <div className="flex flex-col w-full">
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-25 bg-zinc-300 backdrop-blur h-full rounded-[4px]"></div>
                  <Link
                    href="#"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center w-1/2">
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
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        Learn about the project
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-25 bg-zinc-300 backdrop-blur h-full rounded-[4px]"></div>
                  <Link
                    href="#buy"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center w-1/2">
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
                      <div className="text-base font-bold">Purchase Token</div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        Get your hands on some STREAMZ
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-25 bg-zinc-300 backdrop-blur h-full rounded-[4px]"></div>
                  <Link
                    href="#tokenomics"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center w-1/2">
                      <div className="text-base font-normal">3</div>
                      <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                        <Image
                          src="/pie-chart.png"
                          alt="Pie Chart Image"
                          priority
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-base font-bold">Tokenomics</div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        Understand distribution
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-25 bg-zinc-300 backdrop-blur h-full rounded-[4px]"></div>
                  <Link
                    href="#community"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center w-1/2">
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
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        Join the conversation
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-25 bg-zinc-300 backdrop-blur h-full rounded-[4px]"></div>
                  <Link
                    href="#airdrop"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center w-1/2">
                      <div className="text-base font-normal">5</div>
                      <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                        <Image
                          src="/airdrop.png"
                          alt="About Us Image"
                          priority
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-base font-bold">Airdrop</div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        Get tokens if eligibile
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
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
              <span className="text base font-normal font-['system-ui']">
                %
              </span>{" "}
              of their revenue to pay creators.
            </p>
            <p className="text-base font-normal">
              In their world 1M Streams{" "}
              <span className="text base font-normal font-['system-ui']">
                {" "}
                = ~ $
              </span>
              3700.
            </p>
            <p className="text-base font-normal">
              How much can 1M Streamz be worth onchain?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
