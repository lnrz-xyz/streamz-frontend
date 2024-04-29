import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Opener({
  totalSupply = 0,
  priceUSD = 0,
  marketCap = 0,
  contractCount = 0,
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-background opacity-80 backdrop-blur h-64" />

      <div className="flex flex-col h-full w-full p-6 relative">
        <div className="flex flex-row space-x-8 h-14 w-full items-center justify-between">
          <div className="h-full relative flex flex-row space-x-4">
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
                href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="border-foreground border rounded-full px-4 py-2 text-base font-bold justify-center items-center gap-2.5 inline-flex transform hover:scale-105 transition-transform duration-200 border-0">
                BUY STREAMZ
              </a>
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            <a
              href="https://warpcast.com/~/channel/streamz"
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] w-[17px]">
              <Image
                src="/farcaster.svg"
                alt="Farcaster logo"
                fill
                className="aspect-square object-contain"
              />
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
            <h4 className="text-2xl font-bold">Streamz Stats</h4>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:px-5 w-full justify-between">
              <div className="flex flex-col w-full">
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <a
                    href={`https://basescan.org/token/${process.env.STREAMZ_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
                      <div className="text-base font-normal">1</div>
                      <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                        <Image
                          src="/about.png"
                          alt="About Us Image"
                          priority
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-base font-bold">Total Supply</div>
                    </div>
                    <div className="md:flex hidden flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        {totalSupply}
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </a>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <a
                    href={`https://basescan.org/token/${process.env.STREAMZ_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
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
                      <div className="text-base font-bold">Market Cap</div>
                    </div>
                    <div className="md:flex hidden flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        ${marketCap}
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </a>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <a
                    href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
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
                      <div className="text-base font-bold">Price</div>
                    </div>
                    <div className="md:flex hidden flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        ${priceUSD}
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400"
                      />
                    </div>
                  </a>
                </div>
                {contractCount > 0 && (
                  <div className="relative h-14 group">
                    <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                    <Link
                      href="/contracts"
                      className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                      <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
                        <div className="text-base font-normal">4</div>
                        <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                          <Image
                            src="/shake.png"
                            alt="Shaking Hands"
                            priority
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-base font-bold">
                          Streamz Derivatives
                        </div>
                      </div>
                      <div className="md:flex hidden flex-row justify-between items-center w-1/2">
                        <div className="text-zinc-400 text-sm font-normal">
                          {contractCount}
                        </div>
                        <ChevronRight
                          height={24}
                          width={24}
                          className="text-zinc-400"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 space-y-4">
            <h4 className="text-2xl font-bold">About</h4>
            <p className="text-base font-normal">
              Welcome to Streamz, where we{"'"}re shaking up how artists get
              paid.
            </p>
            <p className="text-base font-normal">
              Right now, The big Green Giant dishes out a measly $0.003 per
              stream, hardly enough unless you{"'"}re topping charts.
            </p>
            <p className="text-base font-normal">
              We{"'"}re redefining the true value of 1M streamz
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
