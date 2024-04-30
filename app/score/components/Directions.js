"use client"

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Copy,
  LinkIcon,
  PlusCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DialogTrigger,
  DialogClose,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog"

import { useScore } from "@/hooks/useScore"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Contract from "@/app/components/Contract"

const Directions = ({ contracts }) => {
  const { data: scoreData, isPending } = useScore()

  if (isPending || !scoreData) {
    return null
  }

  return (
    <div className="flex flex-col gap-2.5 px-8">
      <h3 className="text-2xl font-bold">Large Bounties</h3>

      <div className="flex flex-col md:flex-row w-full md:h-64 gap-2.5">
        {scoreData?.liquidity && (
          <div className="flex-1 md:flex-[0.38] w-full h-64 bg-neutral-800 rounded-2xl flex-col justify-between px-4 py-8 space-y-6">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-2xl font-bold">LP Liquidity</h4>
              <a
                href={`https://app.uniswap.org/explore/tokens/base/${process.env.STREAMZ_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row space-x-1">
                <p className="text-zinc-400 text-sm font-light">
                  View on Uniswap
                </p>
                <ArrowUpRight size={16} color="rgb(161 161 170)" />
              </a>
            </div>
            <div className="flex">
              <h2 className="text-5xl font-bold">
                {scoreData?.liquidity} Tokens
              </h2>
            </div>
          </div>
        )}
        {contracts && contracts.length > 0 && (
          <div className="flex-1 md:flex-[0.38] h-64 w-full bg-neutral-800 rounded-2xl cursor flex flex-col px-4 py-8 overflow-hidden relative z-20">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-2xl font-bold">Derivative Collections</h4>
              {contracts.length < 4 && (
                <Link href="/contracts" className="flex flex-row space-x-1">
                  <p className="text-zinc-400 text-sm font-light">View all</p>
                  <ArrowUpRight size={16} color="rgb(161 161 170)" />
                </Link>
              )}
            </div>
            <div className="flex flex-row space-x-4 flex-nowrap overflow-hidden">
              {contracts.slice(0, 4).map((contract, index) => {
                return (
                  <Contract
                    key={contract.address + index}
                    contract={contract}
                    showDescription={false}
                  />
                )
              })}
            </div>
            {contracts.length >= 4 && (
              <div className="absolute right-0 bottom-0 bg-gradient-to-l from-neutral-800 to-transparent w-48 h-full z-50 flex items-center justify-end px-4">
                <div className="bg-foreground rounded-full p-2">
                  <ArrowRight size={18} color="black" />
                </div>
              </div>
            )}
          </div>
        )}
        <div className="flex-1 md:flex-[0.24] w-full h-64 bg-neutral-800 rounded-2xl px-3 py-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Create Derivative NFTs</h3>
            <div className="flex flex-col gap-2">
              <Dialog>
                <DialogTrigger className="flex flex-row items-center justify-center space-x-1 h-16 bg-neutral-700 rounded-lg transform hover:scale-105 transition-transform duration-200">
                  <p className="text-neutral-300 text-sm font-bold">
                    Create With Zora
                  </p>
                  <PlusCircle size={16} color="rgb(212 212 212)" />
                </DialogTrigger>
                <ZoraDialogContent />
              </Dialog>
              <Dialog>
                <DialogTrigger className="flex flex-row items-center justify-center space-x-1 h-16 bg-neutral-700 rounded-lg transform hover:scale-105 transition-transform duration-200">
                  <p className="text-neutral-300 text-sm font-bold">
                    Create With Sound
                  </p>
                  <PlusCircle size={16} color="rgb(212 212 212)" />
                </DialogTrigger>
                <SoundDialogContent />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SoundDialogContent = () => {
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  const steps = [
    {
      title: "Create With Sound",
      description: "Create a derivative NFT with Sound on the Base Network",
      image: "/sound-upload.jpg",
      actionBubbleText: "sound.xyz/create",
      actionBubbleLink: "https://sound.xyz/create",
      actionBubbleIcon: <LinkIcon size={16} color="rgb(212 212 212)" />,
    },
    {
      title: "Add Split",
      description:
        "Use 0xSplits to give Streamz a percentage. Double check the release is on the Base Network.",
      image: "/sound-split.jpg",
      actionBubbleText:
        process.env.NEXT_PUBLIC_SPLIT_ADDRESS.slice(0, 6) + "...",
      actionBubbleIcon: <CopyIcon copied={copied} />,
      action: () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_SPLIT_ADDRESS)
        setCopied(true)
      },
    },
    {
      title: "Release",
      description: "Release your song to the masses!",
      image: "/sound-confirm.jpg",
    },
  ]

  return (
    <DialogContent className="w-screen md:max-w-md border-0 md:px-[-8px] mx-[-12px]">
      <div className="w-full h-64 relative rounded-t-md overflow-hidden">
        <Image
          alt="Profile Picture"
          src={steps[step].image}
          objectFit="contain"
          fill
        />
      </div>
      <div className="flex flex-col space-y-4 p-4 items-center justify-between">
        <h2 className="text-xl font-bold">{steps[step].title}</h2>
        <p className="text-center text-sm">{steps[step].description}</p>
        {steps[step].actionBubbleText && steps[step].actionBubbleLink ? (
          <a
            href={steps[step].actionBubbleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-center items-center gap-1 inline-flex">
              {steps[step].actionBubbleIcon}
              <div className="text-neutral-300 text-sm font-bold">
                {steps[step].actionBubbleText}
              </div>
            </div>
          </a>
        ) : (
          steps[step].actionBubbleText && (
            <div
              onClick={steps[step].action}
              className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 inline-flex">
                {steps[step].actionBubbleIcon}
                <div className="text-neutral-300 text-sm font-bold">
                  {steps[step].actionBubbleText}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-full items-center flex flex-col space-y-4 pt-8 p-4">
        <div className="w-14 h-2 relative">
          <div
            onClick={() => setStep(0)}
            className={cn(
              "w-2 h-2 left-0 top-0 absolute rounded-full hover:cursor-pointer",
              step === 0 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
          <div
            onClick={() => setStep(1)}
            className={cn(
              "w-2 h-2 left-[24px] top-0 absolute rounded-full hover:cursor-pointer",
              step === 1 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
          <div
            onClick={() => setStep(2)}
            className={cn(
              "w-2 h-2 left-[48px] top-0 absolute rounded-full hover:cursor-pointer",
              step === 2 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
        </div>

        {step === steps.length - 1 ? (
          <DialogClose className="w-full">
            <Button className="w-full h-12 text-xl font-bold rounded-full">
              Done
            </Button>
          </DialogClose>
        ) : (
          <Button
            onClick={() => setStep(step + 1)}
            className="w-full h-12 text-xl font-bold rounded-full">
            Next
          </Button>
        )}
      </div>
    </DialogContent>
  )
}

export const ZoraDialogContent = () => {
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  const steps = [
    {
      title: "Create With Zora",
      description:
        "Create a derivative on Base Network with Zora. Make sure to switch your network to Base.",
      image: "/zora-base.png",
      actionBubbleText: "zora.co/create",
      actionBubbleLink: "https://zora.co/create",
      actionBubbleIcon: <LinkIcon size={16} color="rgb(212 212 212)" />,
    },
    {
      title: "Advanced Settings",
      description: "Go to advanced settings",
      image: "/zora-settings.png",
    },
    {
      title: "Add Split",
      description: "Use 0xSplits to give Streamz a percentage",
      image: "/zora-split.png",
      actionBubbleText:
        process.env.NEXT_PUBLIC_SPLIT_ADDRESS.slice(0, 6) + "...",
      actionBubbleIcon: <CopyIcon copied={copied} />,
      action: () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_SPLIT_ADDRESS)
        setCopied(true)
      },
    },
  ]

  return (
    <DialogContent className="w-screen md:max-w-md border-0 md:px-[-8px] mx-[-12px]">
      <div className="w-full h-64 relative rounded-t-md overflow-hidden">
        <Image
          alt="Profile Picture"
          src={steps[step].image}
          objectFit="contain"
          fill
        />
      </div>
      <div className="flex flex-col space-y-4 p-4 items-center justify-between">
        <h2 className="text-xl font-bold">{steps[step].title}</h2>
        <p className="text-center text-sm">{steps[step].description}</p>
        {steps[step].actionBubbleText && steps[step].actionBubbleLink ? (
          <a
            href={steps[step].actionBubbleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-center items-center gap-1 inline-flex">
              {steps[step].actionBubbleIcon}
              <div className="text-neutral-300 text-sm font-bold">
                {steps[step].actionBubbleText}
              </div>
            </div>
          </a>
        ) : (
          steps[step].actionBubbleText && (
            <div
              onClick={steps[step].action}
              className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 inline-flex">
                {steps[step].actionBubbleIcon}
                <div className="text-neutral-300 text-sm font-bold">
                  {steps[step].actionBubbleText}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-full items-center flex flex-col space-y-4 pt-8 p-4">
        <div className="w-14 h-2 relative">
          <div
            onClick={() => setStep(0)}
            className={cn(
              "w-2 h-2 left-0 top-0 absolute rounded-full hover:cursor-pointer",
              step === 0 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
          <div
            onClick={() => setStep(1)}
            className={cn(
              "w-2 h-2 left-[24px] top-0 absolute rounded-full hover:cursor-pointer",
              step === 1 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
          <div
            onClick={() => setStep(2)}
            className={cn(
              "w-2 h-2 left-[48px] top-0 absolute rounded-full hover:cursor-pointer",
              step === 2 ? "bg-green-500" : "bg-zinc-300"
            )}
          />
        </div>

        {step === steps.length - 1 ? (
          <DialogClose className="w-full">
            <Button className="w-full h-12 text-xl font-bold rounded-full">
              Done
            </Button>
          </DialogClose>
        ) : (
          <Button
            onClick={() => setStep(step + 1)}
            className="w-full h-12 text-xl font-bold rounded-full">
            Next
          </Button>
        )}
      </div>
    </DialogContent>
  )
}

const CopyIcon = ({ copied }) => {
  if (copied) {
    return <CheckCircle size={16} color="rgb(212 212 212)" />
  }
  return <Copy size={16} color="rgb(212 212 212)" />
}

export default Directions
