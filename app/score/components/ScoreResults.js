"use client"
import Image from "next/image"
import { useScore } from "@/hooks/useScore"
import { toast } from "sonner"
import { useEffect, useCallback, useState, useMemo } from "react"
import {
  ArrowUpRight,
  Badge,
  CheckCircle,
  ChevronRight,
  Copy,
  Loader2,
} from "lucide-react"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import Link from "next/link"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import useApi from "@/hooks/useApi"
import { useExperiences } from "@/hooks/useExperiences"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useAuthToken } from "@/hooks/useAuthToken"

const prettyReasons = {
  "contract splits": {
    completed: "Created Streamz offshoot NFTs and added Streamz to the 0xSplit",
    incomplete: `Create Streamz NFTs on sound.xyz or zora.co and add the Streamz split address to the 0xSplit`,
    potentialPoints: "∞",
    link: "https://sound.xyz",
  },
  "streamz nfts": {
    completed: "Holds Streamz Related NFTs",
    incomplete: "Acquire Streamz Related NFTs",
    potentialPoints: "∞",
    selfLink: "/contracts",
  },
  "uniswap positions": {
    completed: "Holds Uniswap liquidity positions",
    incomplete: "Hold Uniswap liquidity positions weekly",
    potentialPoints: "∞",
    link: `https://app.uniswap.org/add/${process.env.NEXT_PUBLIC_STREAMZ_ADDRESS}/ETH?chain=base`,
  },
  "farcaster follows lnrz": {
    completed: "Follows STREAMZ channel on Farcaster",
    incomplete: "Follow STREAMZ channel on Farcaster",
    potentialPoints: "500",
    link: "https://warpcast.com/~/channel/streamz",
  },
  "farcaster account": {
    completed: "Connected Farcaster account",
    incomplete: "Create a Farcaster account",
    potentialPoints: "100",
    link: "https://warpcast.com",
  },
  "farcaster casts": {
    completed: "Casts on Farcaster",
    incomplete: "Cast on Farcaster Channel",
    potentialPoints: "10",
    link: "https://warpcast.com/~/channel/streamz",
  },
  signup: {
    completed: "Signed up for Streamz",
  },
  "x connected": {
    completed: "Connected X account",
    incomplete: "Connect X account",
    potentialPoints: "250",
    selfLink: "/profile",
  },
  "follows lnrz x": {
    completed: "Follows STREAMZ on X",
    incomplete: "Follow STREAMZ on X",
    potentialPoints: "500",
    link: "https://x.com/streamzonbase",
  },

  "email connected": {
    completed: "Connected email account",
    incomplete: "Connect email account",
    potentialPoints: "100",
    selfLink: "/profile",
  },
}

const ScoreResults = () => {
  const { data: score, isPending } = useScore()
  const { data: authData, refetch } = useAuthToken()

  const { mutate } = useUpsertExperienceMutation()
  const { data: experienceData, isPending: isPendingExperiences } =
    useExperiences()
  const [clickedCopy, setClickedCopy] = useState(false)
  const [shareLink, setShareLink] = useState("")
  const [fetchingShareLink, setFetchingShareLink] = useState(false)

  const [airdropOpen, setAirdropOpen] = useState(false)
  const { get } = useApi()

  const completedReasons = useMemo(() => {
    return Object.entries(score?.reasons || {}).filter(
      ([id, reason]) => reason.score > 0
    )
  }, [score])

  useEffect(() => {
    if (!authData) {
      refetch()
    }
  }, [authData, refetch])

  useEffect(() => {
    console.log("score", score)
  }, [score])
  useEffect(() => {
    if (clickedCopy && shareLink) {
      toast.success("Copied share link to clipboard!")
      navigator.clipboard.writeText(shareLink)
      setTimeout(() => {
        setClickedCopy(false)
      }, 2000)
    }
  }, [shareLink, clickedCopy])

  useEffect(() => {
    if (score) {
      // console.log("score", score, Object.entries(score?.reasons))
      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })
    }
  }, [score, mutate, isPending])

  const getShareLink = useCallback(
    async (airdrop = 0) => {
      setFetchingShareLink(true)

      const data = await get(`/score/me/share?airdrop=${airdrop}`)

      setShareLink(data.link)
      setFetchingShareLink(false)
    },
    [get]
  )

  useEffect(() => {
    if (score && !isPendingExperiences) {
      console.log("experiences", experienceData)
      if (experienceData && experienceData.length > 0) {
        const hasAirdropExperience = experienceData.some(
          experience => experience.experienceType === "airdrop"
        )
        console.log("hasAirdropExperience", hasAirdropExperience)
        if (!hasAirdropExperience) {
          getShareLink(score.airdrop).then(() => {
            setAirdropOpen(true)
          })

          mutate({
            experience: "airdrop",
            metadata: {
              airdrop: true,
            },
          })
        }
      }
    }
  }, [score, experienceData, isPendingExperiences, mutate, getShareLink])

  if (!score) {
    return (
      <div className="min-h-screen h-full w-full flex flex-col space-y-8 items-center justify-center">
        <h3 className="text-2xl font-bold">Loading score...</h3>
        <Loader2 className="animate-spin" size={64} />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center min-h-full w-full overflow-x-hidden">
      {score.airdrop > 0 && (
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 gap-2.5 fixed bottom-0 bg-gradient-to-r from-fuchsia-700 to-blue-400 z-50">
          <div className="flex flex-col px-2">
            <h4 className="text-sm md:text-base font-bold">
              You received an airdrop
            </h4>
            <p className="text-sm md:text-base">
              For supporting us before we were even a thing, we{"'"}re giving
              you a little something back. Check your wallet and make sure to
              share on farcaster!
            </p>
          </div>

          <Dialog open={airdropOpen} onOpenChange={setAirdropOpen}>
            <DialogTrigger
              className="rounded-full px-8 py-2 md:px-3 md:py-2 bg-foreground text-background flex items-center"
              onClick={() => getShareLink(score.airdrop)}>
              <h4 className="text-center text-sm md:text-base font-bold">
                Share as Frame
              </h4>
            </DialogTrigger>
            <DialogContent className="w-screen md:max-w-md border-0 md:px-[-8px] mx-[-12px]">
              {!fetchingShareLink ? (
                <div className="bg-gradient-to-b from-neutral-700 to-background-100 backdrop-blur-[79.60px] rounded-t-lg">
                  <div className="flex flex-col gap-2.5 items-center justify-between">
                    <div className="h-40 flex flex-col bg-[#4100f4] z-20 w-full rounded-t-lg items-center justify-center">
                      <h5 className="text-2xl text-center font-bold text-foreground">
                        You were airdropped
                      </h5>
                      <h2 className="text-5xl text-center font-bold text-foreground">
                        {score.airdrop} STRM
                      </h2>
                    </div>
                    <div className="flex flex-col space-y-2 items-center justify-center py-8">
                      <h2 className="text-xl font-bold">
                        Share Frame on Warpcast
                      </h2>
                      <p className="text-center text-sm">
                        Congratulations on being retroactively airdropped
                        Streamz! Copy the following link and share it as a Frame
                        on{" "}
                        <a
                          href="https://warpcast.com"
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-primary font-bold">
                          Warpcast
                        </a>{" "}
                        and get started earning points towards the next Airdrop!
                      </p>
                    </div>
                  </div>
                  <div className="w-full items-center flex flex-col p-4 gap-2.5">
                    <div
                      onClick={() => {
                        // copy to clipboard
                        setClickedCopy(true)
                      }}
                      className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="justify-center items-center gap-1 inline-flex">
                        {clickedCopy ? (
                          <CheckCircle size={16} color="rgb(212 212 212)" />
                        ) : (
                          <Copy size={16} color="rgb(212 212 212)" />
                        )}
                        <div className="text-neutral-300 text-sm font-bold">
                          {clickedCopy
                            ? "Copied!"
                            : shareLink.slice(0, 30) +
                              (shareLink.length > 30 ? "..." : "")}
                        </div>
                      </div>
                    </div>
                    <a
                      href={`https://warpcast.com/~/compose?text=${encodeURIComponent(
                        "Just got my Streamz airdrop! /streamz"
                      )}&embeds[]=${encodeURIComponent(shareLink)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full">
                      <Button className="w-full h-12 text-lg font-bold rounded-full">
                        Share on Warpcast
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col p-8 items-center justify-center">
                  <Loader2 className="animate-spin" size={64} />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div className="flex flex-col w-full justify-center items-center bg-[#34C057] h-[31rem] relative">
        <div className="absolute h-full aspect-square z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/score.svg"
            alt="Score Asset"
            priority
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center z-10 w-full bg-[#34C057] py-5">
          <h4 className="text-neutral-800 text-base font-bold">
            Your Streamz score is
          </h4>
          <h2 className="text-neutral-800 text-8xl font-bold">{score.score}</h2>
        </div>
      </div>
      <div className="flex flex-col w-full h-14 bg-[#34C057] items-center justify-center">
        <Dialog>
          <DialogTrigger
            className="flex flex-row items-center justify-center px-4 py-1 rounded-full underline text-background space-x-1"
            onClick={() => getShareLink()}>
            <p className="text-base font-bold text-background">
              Share Score as Farcaster Frame
            </p>
            <ArrowUpRight size={16} className="text-background" />
          </DialogTrigger>
          <DialogContent className="w-screen md:max-w-md border-0 md:px-[-8px] mx-[-12px]">
            {!fetchingShareLink ? (
              <div className="bg-gradient-to-b from-neutral-700 to-background-100 backdrop-blur-[79.60px] rounded-t-lg">
                <div className="flex flex-col gap-2.5 items-center justify-between">
                  <div className="h-40 flex flex-col bg-primary z-20 w-full rounded-t-lg items-center justify-center">
                    <h5 className="text-2xl text-center font-bold text-neutral-800">
                      Your Score is
                    </h5>
                    <h2 className="text-6xl text-center font-bold text-neutral-800">
                      {score.score}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-2 items-center justify-center py-8">
                    <h2 className="text-xl font-bold">
                      Share Frame on Warpcast
                    </h2>
                    <p className="text-center text-sm">
                      Copy the following link and share it as a Frame on{" "}
                      <a
                        href="https://warpcast.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-primary font-bold">
                        Warpcast
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full items-center flex flex-col p-4 gap-2.5">
                  <div
                    onClick={() => {
                      // copy to clipboard
                      setClickedCopy(true)
                    }}
                    className="hover:cursor-pointer w-full h-11 py-6 bg-neutral-700 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="justify-center items-center gap-1 inline-flex">
                      {clickedCopy ? (
                        <CheckCircle size={16} color="rgb(212 212 212)" />
                      ) : (
                        <Copy size={16} color="rgb(212 212 212)" />
                      )}
                      <div className="text-neutral-300 text-sm font-bold">
                        {clickedCopy
                          ? "Copied!"
                          : shareLink.slice(0, 30) +
                            (shareLink.length > 30 ? "..." : "")}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://warpcast.com/~/compose?text=${encodeURIComponent(
                      "Just started earning towards the Streamz SZN 1 airdrop! /streamz"
                    )}&embeds[]=${encodeURIComponent(shareLink)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full">
                    <Button className="w-full h-12 text-lg font-bold rounded-full">
                      Share on Warpcast
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col p-8 items-center justify-center">
                <Loader2 className="animate-spin" size={64} />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4 w-full py-8 px-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-bold py-4">Streamz SZN 1</h3>
          <p className="text-lg">
            Streamz SZN 1 is a series of bounties and challenges that will
            increase your ability to claim the next airdrop at the end of the
            season.
          </p>
          <p className="text-lg">
            Your primary bounty is to add Streamz to the 0xSplits of new
            creations (art, memes, songs, etc.) as well as collecting the
            derivative NFTs made by other members of the community.
            Additionally, you can earn by providing to the liquidity pool and
            other bounties below.
          </p>
        </div>

        <div className="flex flex-col pt-32 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold">Increase Your Score</h4>
            <div class="flex flex-nowrap py-4 gap-2.5 overflow-x-auto scrollbar">
              {Object.entries(prettyReasons).map(([id, reason], index) => {
                if (id === "signup") {
                  return null
                }
                // only incomplete
                if (completedReasons.some(r => r[0] === id)) {
                  return null
                }

                if (reason.link) {
                  return (
                    <a
                      key={`${index}-not-${id}`}
                      href={reason.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-3 p-6 transform hover:scale-105 transition-transform duration-200">
                      <div className="h-[22px] w-[22px]">
                        <Badge />
                      </div>

                      <div className="flex w-64">
                        <h3 className="text-sm font-medium underline">
                          {reason.incomplete}
                        </h3>
                      </div>
                      <div className="h-6 text-neutral-400 text-sm">
                        +{reason.potentialPoints}pts
                      </div>
                      <div className="h-6 w-6">
                        <ChevronRight />
                      </div>
                    </a>
                  )
                }
                if (reason.selfLink) {
                  return (
                    <Link
                      key={`${index}-not-${id}`}
                      href={reason.selfLink}
                      className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-3 p-6 transform hover:scale-105 transition-transform duration-200">
                      <div className="h-[22px] w-[22px]">
                        <Badge />
                      </div>

                      <div className="flex w-64">
                        <h3 className="text-sm font-medium underline">
                          {reason.incomplete}
                        </h3>
                      </div>
                      <div className="h-6 text-neutral-400 text-sm">
                        +{reason.potentialPoints}pts
                      </div>
                      <div className="h-6 w-6">
                        <ChevronRight />
                      </div>
                    </Link>
                  )
                }
                return (
                  <div
                    key={`${index}-not-${id}`}
                    className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-3 p-6 transform hover:scale-105 transition-transform duration-200">
                    <div className="h-[22px] w-[22px]">
                      <Badge />
                    </div>

                    <div className="flex w-64">
                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.incomplete}
                      </h3>
                    </div>
                    <div className="h-6 text-neutral-400 text-sm">
                      +{reason.potentialPoints}pts
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold">Completed Bounties</h4>
            <div class="flex flex-nowrap py-4 gap-2.5 overflow-x-auto scrollbar">
              {Object.entries(prettyReasons).map(([id, reason], index) => {
                if (!completedReasons.some(r => r[0] === id)) {
                  return null
                }

                if (reason.link) {
                  return (
                    <a
                      key={`${index}-${id}`}
                      href={reason.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 p-6 transform hover:scale-105 transition-transform duration-200">
                      <div className="h-[22px] w-[22px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className="h-[24px] w-[24px]"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M22.485 9.30214C22.0811 8.88 21.6632 8.445 21.5057 8.0625C21.36 7.71214 21.3514 7.13143 21.3429 6.56893C21.3268 5.52321 21.3096 4.33821 20.4857 3.51429C19.6618 2.69036 18.4768 2.67321 17.4311 2.65714C16.8686 2.64857 16.2879 2.64 15.9375 2.49429C15.5561 2.33679 15.12 1.91893 14.6979 1.515C13.9586 0.804643 13.1186 0 12 0C10.8814 0 10.0425 0.804643 9.30214 1.515C8.88 1.91893 8.445 2.33679 8.0625 2.49429C7.71429 2.64 7.13143 2.64857 6.56893 2.65714C5.52321 2.67321 4.33821 2.69036 3.51429 3.51429C2.69036 4.33821 2.67857 5.52321 2.65714 6.56893C2.64857 7.13143 2.64 7.71214 2.49429 8.0625C2.33679 8.44393 1.91893 8.88 1.515 9.30214C0.804643 10.0414 0 10.8814 0 12C0 13.1186 0.804643 13.9575 1.515 14.6979C1.91893 15.12 2.33679 15.555 2.49429 15.9375C2.64 16.2879 2.64857 16.8686 2.65714 17.4311C2.67321 18.4768 2.69036 19.6618 3.51429 20.4857C4.33821 21.3096 5.52321 21.3268 6.56893 21.3429C7.13143 21.3514 7.71214 21.36 8.0625 21.5057C8.44393 21.6632 8.88 22.0811 9.30214 22.485C10.0414 23.1954 10.8814 24 12 24C13.1186 24 13.9575 23.1954 14.6979 22.485C15.12 22.0811 15.555 21.6632 15.9375 21.5057C16.2879 21.36 16.8686 21.3514 17.4311 21.3429C18.4768 21.3268 19.6618 21.3096 20.4857 20.4857C21.3096 19.6618 21.3268 18.4768 21.3429 17.4311C21.3514 16.8686 21.36 16.2879 21.5057 15.9375C21.6632 15.5561 22.0811 15.12 22.485 14.6979C23.1954 13.9586 24 13.1186 24 12C24 10.8814 23.1954 10.0425 22.485 9.30214ZM16.8921 10.035L10.8921 16.035C10.8125 16.1147 10.718 16.1779 10.6139 16.2211C10.5099 16.2642 10.3984 16.2864 10.2857 16.2864C10.1731 16.2864 10.0615 16.2642 9.95748 16.2211C9.85342 16.1779 9.75889 16.1147 9.67929 16.035L7.10786 13.4636C6.94702 13.3027 6.85667 13.0846 6.85667 12.8571C6.85667 12.6297 6.94702 12.4115 7.10786 12.2507C7.26869 12.0899 7.48683 11.9995 7.71429 11.9995C7.94174 11.9995 8.15988 12.0899 8.32071 12.2507L10.2857 14.2168L15.6793 8.82214C15.7589 8.74251 15.8535 8.67933 15.9575 8.63623C16.0616 8.59313 16.1731 8.57095 16.2857 8.57095C16.3983 8.57095 16.5099 8.59313 16.6139 8.63623C16.718 8.67933 16.8125 8.74251 16.8921 8.82214C16.9718 8.90178 17.035 8.99632 17.0781 9.10037C17.1212 9.20443 17.1433 9.31595 17.1433 9.42857C17.1433 9.5412 17.1212 9.65272 17.0781 9.75677C17.035 9.86082 16.9718 9.95536 16.8921 10.035Z"
                            fill="#1cba53"
                          />
                        </svg>
                      </div>

                      <div className="flex w-64">
                        <h3 className="text-sm font-medium underline">
                          {reason.completed}
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-sm font-light">
                        {score?.reasons[id].score}
                        pts
                      </p>
                    </a>
                  )
                }
                if (reason.selfLink) {
                  return (
                    <Link
                      key={`${index}-${id}`}
                      href={reason.selfLink}
                      className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 p-6 transform hover:scale-105 transition-transform duration-200">
                      <div className="h-[22px] w-[22px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className="h-[24px] w-[24px]"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M22.485 9.30214C22.0811 8.88 21.6632 8.445 21.5057 8.0625C21.36 7.71214 21.3514 7.13143 21.3429 6.56893C21.3268 5.52321 21.3096 4.33821 20.4857 3.51429C19.6618 2.69036 18.4768 2.67321 17.4311 2.65714C16.8686 2.64857 16.2879 2.64 15.9375 2.49429C15.5561 2.33679 15.12 1.91893 14.6979 1.515C13.9586 0.804643 13.1186 0 12 0C10.8814 0 10.0425 0.804643 9.30214 1.515C8.88 1.91893 8.445 2.33679 8.0625 2.49429C7.71429 2.64 7.13143 2.64857 6.56893 2.65714C5.52321 2.67321 4.33821 2.69036 3.51429 3.51429C2.69036 4.33821 2.67857 5.52321 2.65714 6.56893C2.64857 7.13143 2.64 7.71214 2.49429 8.0625C2.33679 8.44393 1.91893 8.88 1.515 9.30214C0.804643 10.0414 0 10.8814 0 12C0 13.1186 0.804643 13.9575 1.515 14.6979C1.91893 15.12 2.33679 15.555 2.49429 15.9375C2.64 16.2879 2.64857 16.8686 2.65714 17.4311C2.67321 18.4768 2.69036 19.6618 3.51429 20.4857C4.33821 21.3096 5.52321 21.3268 6.56893 21.3429C7.13143 21.3514 7.71214 21.36 8.0625 21.5057C8.44393 21.6632 8.88 22.0811 9.30214 22.485C10.0414 23.1954 10.8814 24 12 24C13.1186 24 13.9575 23.1954 14.6979 22.485C15.12 22.0811 15.555 21.6632 15.9375 21.5057C16.2879 21.36 16.8686 21.3514 17.4311 21.3429C18.4768 21.3268 19.6618 21.3096 20.4857 20.4857C21.3096 19.6618 21.3268 18.4768 21.3429 17.4311C21.3514 16.8686 21.36 16.2879 21.5057 15.9375C21.6632 15.5561 22.0811 15.12 22.485 14.6979C23.1954 13.9586 24 13.1186 24 12C24 10.8814 23.1954 10.0425 22.485 9.30214ZM16.8921 10.035L10.8921 16.035C10.8125 16.1147 10.718 16.1779 10.6139 16.2211C10.5099 16.2642 10.3984 16.2864 10.2857 16.2864C10.1731 16.2864 10.0615 16.2642 9.95748 16.2211C9.85342 16.1779 9.75889 16.1147 9.67929 16.035L7.10786 13.4636C6.94702 13.3027 6.85667 13.0846 6.85667 12.8571C6.85667 12.6297 6.94702 12.4115 7.10786 12.2507C7.26869 12.0899 7.48683 11.9995 7.71429 11.9995C7.94174 11.9995 8.15988 12.0899 8.32071 12.2507L10.2857 14.2168L15.6793 8.82214C15.7589 8.74251 15.8535 8.67933 15.9575 8.63623C16.0616 8.59313 16.1731 8.57095 16.2857 8.57095C16.3983 8.57095 16.5099 8.59313 16.6139 8.63623C16.718 8.67933 16.8125 8.74251 16.8921 8.82214C16.9718 8.90178 17.035 8.99632 17.0781 9.10037C17.1212 9.20443 17.1433 9.31595 17.1433 9.42857C17.1433 9.5412 17.1212 9.65272 17.0781 9.75677C17.035 9.86082 16.9718 9.95536 16.8921 10.035Z"
                            fill="#1cba53"
                          />
                        </svg>
                      </div>
                      <div className="flex w-64">
                        <h3 className="text-sm font-medium underline">
                          {reason.completed}
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-sm font-light">
                        {score?.reasons[id].score}
                        pts
                      </p>
                    </Link>
                  )
                }
                return (
                  <div
                    key={`${index}-${id}`}
                    className="flex h-24 items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 p-6 transform hover:scale-105 transition-transform duration-200">
                    <div className="h-[22px] w-[22px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="h-[24px] w-[24px]"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M22.485 9.30214C22.0811 8.88 21.6632 8.445 21.5057 8.0625C21.36 7.71214 21.3514 7.13143 21.3429 6.56893C21.3268 5.52321 21.3096 4.33821 20.4857 3.51429C19.6618 2.69036 18.4768 2.67321 17.4311 2.65714C16.8686 2.64857 16.2879 2.64 15.9375 2.49429C15.5561 2.33679 15.12 1.91893 14.6979 1.515C13.9586 0.804643 13.1186 0 12 0C10.8814 0 10.0425 0.804643 9.30214 1.515C8.88 1.91893 8.445 2.33679 8.0625 2.49429C7.71429 2.64 7.13143 2.64857 6.56893 2.65714C5.52321 2.67321 4.33821 2.69036 3.51429 3.51429C2.69036 4.33821 2.67857 5.52321 2.65714 6.56893C2.64857 7.13143 2.64 7.71214 2.49429 8.0625C2.33679 8.44393 1.91893 8.88 1.515 9.30214C0.804643 10.0414 0 10.8814 0 12C0 13.1186 0.804643 13.9575 1.515 14.6979C1.91893 15.12 2.33679 15.555 2.49429 15.9375C2.64 16.2879 2.64857 16.8686 2.65714 17.4311C2.67321 18.4768 2.69036 19.6618 3.51429 20.4857C4.33821 21.3096 5.52321 21.3268 6.56893 21.3429C7.13143 21.3514 7.71214 21.36 8.0625 21.5057C8.44393 21.6632 8.88 22.0811 9.30214 22.485C10.0414 23.1954 10.8814 24 12 24C13.1186 24 13.9575 23.1954 14.6979 22.485C15.12 22.0811 15.555 21.6632 15.9375 21.5057C16.2879 21.36 16.8686 21.3514 17.4311 21.3429C18.4768 21.3268 19.6618 21.3096 20.4857 20.4857C21.3096 19.6618 21.3268 18.4768 21.3429 17.4311C21.3514 16.8686 21.36 16.2879 21.5057 15.9375C21.6632 15.5561 22.0811 15.12 22.485 14.6979C23.1954 13.9586 24 13.1186 24 12C24 10.8814 23.1954 10.0425 22.485 9.30214ZM16.8921 10.035L10.8921 16.035C10.8125 16.1147 10.718 16.1779 10.6139 16.2211C10.5099 16.2642 10.3984 16.2864 10.2857 16.2864C10.1731 16.2864 10.0615 16.2642 9.95748 16.2211C9.85342 16.1779 9.75889 16.1147 9.67929 16.035L7.10786 13.4636C6.94702 13.3027 6.85667 13.0846 6.85667 12.8571C6.85667 12.6297 6.94702 12.4115 7.10786 12.2507C7.26869 12.0899 7.48683 11.9995 7.71429 11.9995C7.94174 11.9995 8.15988 12.0899 8.32071 12.2507L10.2857 14.2168L15.6793 8.82214C15.7589 8.74251 15.8535 8.67933 15.9575 8.63623C16.0616 8.59313 16.1731 8.57095 16.2857 8.57095C16.3983 8.57095 16.5099 8.59313 16.6139 8.63623C16.718 8.67933 16.8125 8.74251 16.8921 8.82214C16.9718 8.90178 17.035 8.99632 17.0781 9.10037C17.1212 9.20443 17.1433 9.31595 17.1433 9.42857C17.1433 9.5412 17.1212 9.65272 17.0781 9.75677C17.035 9.86082 16.9718 9.95536 16.8921 10.035Z"
                          fill="#1cba53"
                        />
                      </svg>
                    </div>

                    <div className="flex w-64">
                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.completed}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-sm font-light">
                      {score?.reasons[id].score}
                      pts
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoreResults
