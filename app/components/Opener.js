import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import ClaimButton from "./ClaimButton"
import ClaimAmount from "./ClaimAmount"
import Countdown from "./Countdown"

export default function Opener({
  totalSupply = 0,
  priceUSD = 0,
  marketCap = 0,
  holderCount = 0,
}) {
  return (
    <div className="relative">
      <div className="flex flex-col h-full w-full p-6 relative">
        <div className="flex flex-row gap-8 h-14 w-full items-center justify-between">
          <div className="h-full relative flex flex-row gap-4">
            <Link href="/" className="relative h-full w-14">
              <Image
                src="/logo.svg"
                alt="Streamz logo"
                fill
                className="aspect-square object-contain"
              />
            </Link>
            <div className="flex flex-row gap-6 items-center justify-start">
              <a
                href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="border-foreground border rounded-full px-4 py-2 text-base font-bold justify-center items-center gap-2.5 inline-flex transform hover:scale-105 transition-transform duration-200">
                BUY STREAMZ
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://t.me/wstreamz"
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] w-[17px]">
              <Image
                src="/telegram-logo.svg"
                alt="Telegram logo"
                fill
                className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://base.party.app/party/0xa5e68ade446ab5280ef07a591c7d156b13a14c1a"
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] w-[24px]">
              <Image
                src="/party.svg"
                alt="Party logo"
                fill
                className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://warpcast.com/~/channel/streamz"
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] w-[17px]">
              <Image
                src="/farcaster.svg"
                alt="Farcaster logo"
                fill
                className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
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
                className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-6 w-full gap-4">
          <div className="flex flex-col w-full md:w-2/3 space-y-5">
            <h4 className="text-2xl font-bold">Streamz Stats</h4>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:px-5 w-full justify-between">
              <div className="flex flex-col w-full">
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <Dialog>
                    <DialogTrigger
                      href={`https://basescan.org/token/${process.env.STREAMZ_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                      <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
                        <div className="text-base font-normal">1</div>
                        <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                          <Image
                            src="/money.png"
                            alt="Money Image"
                            priority
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-base font-bold">Claim Airdrop</div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-1/2">
                        <div className="text-zinc-400 text-sm font-normal">
                          <ClaimAmount simple />
                        </div>
                        <ChevronRight
                          height={24}
                          width={24}
                          className="text-zinc-400 md:flex hidden"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-4xl">
                          Claim Airdrop
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        Claim your Streamz airdrop tokens now.
                      </DialogDescription>
                      <div className="flex flex-col gap-4 items-center justify-center py-8">
                        <ClaimAmount />
                        <ClaimButton />
                        <div className="flex gap-1 text-sm font-normal text-zinc-400">
                          <p>Claim begins in</p> <Countdown />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <Dialog>
                    <DialogTrigger
                      href={`https://basescan.org/token/${process.env.STREAMZ_ADDRESS}`}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                      <div className="flex flex-row space-x-4 items-center md:w-1/2 w-full">
                        <div className="text-base font-normal">1</div>
                        <div className="relative h-11 w-11 bg-zinc-300 rounded-lg overflow-hidden">
                          <Image
                            src="/coin.png"
                            alt="Coin Image"
                            priority
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-base font-bold">Launch App</div>
                      </div>
                      <div className="flex flex-row justify-end items-center w-1/2">
                        <ChevronRight
                          height={24}
                          width={24}
                          className="text-zinc-400 md:flex hidden"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-4xl">
                          Coming Soon
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        Stay tuned this week on our socials and telegram for the
                        launch of the Streamz app.
                      </DialogDescription>

                      <div className="flex flex-row gap-4 py-4">
                        <a
                          href="https://t.me/wstreamz"
                          target="_blank"
                          rel="noreferrer"
                          className="relative h-[24px] w-[24px]">
                          <Image
                            src="/telegram-logo.svg"
                            alt="Telegram logo"
                            fill
                            className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
                          />
                        </a>
                        <a
                          href="https://base.party.app/party/0xa5e68ade446ab5280ef07a591c7d156b13a14c1a"
                          target="_blank"
                          rel="noreferrer"
                          className="relative h-[24px] w-[32px]">
                          <Image
                            src="/party.svg"
                            alt="Party logo"
                            fill
                            className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
                          />
                        </a>
                        <a
                          href="https://warpcast.com/~/channel/streamz"
                          target="_blank"
                          rel="noreferrer"
                          className="relative h-[24px] w-[24px]">
                          <Image
                            src="/farcaster.svg"
                            alt="Farcaster logo"
                            fill
                            className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
                          />
                        </a>
                        <a
                          href="https://x.com/streamzonbase"
                          target="_blank"
                          rel="noreferrer"
                          className="relative h-[24px] w-[24px]">
                          <Image
                            src="/x-logo.svg"
                            alt="X logo"
                            fill
                            className="aspect-square object-contain transform hover:scale-105 transition-transform duration-200"
                          />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="relative h-14 group">
                  <div className="absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]"></div>
                  <a
                    href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex flex-row items-center justify-between h-full w-full p-2">
                    <div className="flex flex-row gap-4 items-center md:w-1/2 w-full">
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
                      <div className="text-base font-bold">Buy Streamz</div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-1/2">
                      <div className="text-zinc-400 text-sm font-normal">
                        {priceUSD && Number(priceUSD.replaceAll(",", "")) > 0
                          ? `$${priceUSD}`
                          : "Pending Calculation"}
                      </div>
                      <ChevronRight
                        height={24}
                        width={24}
                        className="text-zinc-400 md:flex hidden"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 space-y-4">
            <h4 className="text-2xl font-bold">Stats</h4>
            <div className="flex flex-row gap-4 flex-wrap">
              <div className="flex flex-col">
                <div className="text-base font-bold">Total Supply</div>
                <div className="text-xl font-bold">{totalSupply}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-bold">Market Cap</div>
                <div className="text-xl font-bold">
                  {marketCap && Number(marketCap.replaceAll(",", "")) > 0
                    ? `$${marketCap}`
                    : "Pending Calculation"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-bold">Price</div>
                <div className="text-xl font-bold">
                  {priceUSD && Number(priceUSD.replaceAll(",", "")) > 0
                    ? `$${priceUSD}`
                    : "Pending Calculation"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-bold">Holders</div>
                <div className="text-xl font-bold">{holderCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
