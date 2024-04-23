"use client"
import Image from "next/image"
import { useScore } from "@/hooks/useScore"
import { toast } from "sonner"
import { useEffect, useMemo, useState } from "react"
import { Badge, ChevronRight, Copy, CopyCheck, Loader2 } from "lucide-react"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import Link from "next/link"

const prettyReasons = {
  "streamz nft": {
    completed: "Holds Streamz Related NFTs",
    incomplete: "Acquire Streamz Related NFTs",
    selfLink: "/contracts",
  },
  signup: {
    completed: "Signed up for Streamz",
  },
  "uniswap positions": {
    completed: "Holds Uniswap liquidity positions",
    incomplete: "Hold Uniswap liquidity positions weekly",
    link:
      "https://app.uniswap.org/explore/tokens/base/" +
      process.env.NEXT_PUBLIC_STREAMZ_ADDRESS,
  },
  "contract splits": {
    completed: "Created Streamz offshoot NFTs and added Streamz to the 0xSplit",
    incomplete: `Create Streamz NFTs on sound.xyz or zora.co and add the Streamz split address to the 0xSplit`,
    link: "https://sound.xyz",
  },
  "x connected": {
    completed: "Connected X account",
    incomplete: "Connect X account",
  },
  "follows lnrz x": {
    completed: "Follows LNRZ/STREAMZ on X",
    incomplete: "Follow LNRZ/STRAMZ on X",
    link: "https://x.com/streamzonbase",
  },
  "farcaster follows lnrz": {
    completed: "Follows LNRZ/STREAMZ on Farcaster",
    incomplete: "Follow LNRZ/STREAMZ on Farcaster",
    link: "https://warpcast.com/streamzonbase",
  },
  "farcaster account": {
    completed: "Connected Farcaster account",
    incomplete: "Create a Farcaster account",
  },
  "farcaster casts": {
    completed: "Casts on Farcaster",
    incomplete: "Cast on Farcaster",
  },
  "email connected": {
    completed: "Connected email account",
    incomplete: "Connect email account",
  },
}

const ScoreResults = () => {
  const { data: score, isPending } = useScore()
  const { mutate } = useUpsertExperienceMutation()
  const [clickedCopy, setClickedCopy] = useState(false)

  useEffect(() => {
    if (clickedCopy) {
      toast.success("Copied split address to clipboard!")
      navigator.clipboard.writeText(process.env.NEXT_PUBLIC_STREAMZ_ADDRESS)
      setTimeout(() => {
        setClickedCopy(false)
      }, 2000)
    }
  }, [clickedCopy])

  const topContributions = useMemo(() => {
    console.log("score", score)
    const sorted = score?.reasons.sort((a, b) => b.score - a.score) ?? []
    return sorted
      .slice(0, 5)
      .map(reason => prettyReasons[reason.reason].completed)
  }, [score])

  const notCompleted = useMemo(() => {
    // use pretty reasons (all the reasons) and return all the reasons that are not in score.reasons
    const keys = Object.keys(prettyReasons).filter(
      reason =>
        !score?.reasons.some(scoreReason => scoreReason.reason === reason) &&
        reason !== "signup"
    )

    return keys.map(reason => prettyReasons[reason])
  }, [score])

  useEffect(() => {
    if (score) {
      console.log("score", score)
      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })
    }
  }, [score, mutate, isPending])

  if (!score) {
    return (
      <div className="h-full w-full flex flex-col space-y-8 items-center justify-center">
        <h3 className="text-2xl font-bold">Loading score...</h3>
        <Loader2 className="animate-spin" size={64} />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center min-h-full w-full px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-x-8 md:space-y-0 py-4">
        <div className="flex relative w-full md:w-4/12 aspect-square min-h-[40vh]">
          <Image
            src={`/score-${(score.score % 5) + 1}.png`}
            alt="Score Asset"
            priority
            fill
            className="object-contain rounded-[33px]"
          />
        </div>
        <div className="flex flex-col md:w-8/12 space-y-8 items-center justify-center">
          <div className="flex flex-col space-y-4 w-3/4">
            <h5 className="text-2xl font-bold">Your Score</h5>
            <h3 className="text-8xl font-bold">{score.score}</h3>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 w-3/4 md:space-x-8 md:space-y-0">
            <div className="flex flex-col space-y-4">
              <h5 className="text-2xl font-bold">Top Contribution</h5>
              <h3 className="text-4xl font-bold">
                {prettyReasons[score.reasons[0].reason].completed}
              </h3>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="text-2xl font-bold">Split Address</h5>
              <div
                onClick={() => setClickedCopy(true)}
                className="text-4xl font-bold underline flex flex-row space-x-4 items-center cursor-pointer">
                {clickedCopy ? (
                  <CopyCheck className="h-8 w-8" />
                ) : (
                  <Copy className="h-8 w-8" />
                )}
                <span>
                  {process.env.NEXT_PUBLIC_STREAMZ_ADDRESS.slice(0, 6)}...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-8">
        <h4 className="text-2xl font-bold py-4">Increase Your Score</h4>
        <div className="flex flex-col md:flex-row gap-3 flex-wrap">
          {Object.entries(prettyReasons).map(([id, reason], index) => {
            if (id === "signup") {
              return null
            }
            if (reason.link) {
              return (
                <a
                  key={`${index}-not`}
                  href={reason.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-24 space-x-2 md:min-w-[15%] md:max-w-[30%] items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 inline-flex px-6 py-6 transform hover:scale-105 transition-transform duration-200">
                  {!score?.reasons.some(reason => reason.reason === id) ? (
                    <>
                      <div className="h-[22px] w-[22px]">
                        <Badge />
                      </div>

                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.incomplete}
                      </h3>
                    </>
                  ) : (
                    <>
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

                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.completed}
                      </h3>
                    </>
                  )}
                  <div className="h-6 w-6">
                    <ChevronRight />
                  </div>
                </a>
              )
            }
            if (reason.selfLink) {
              return (
                <Link
                  key={`${index}-not`}
                  href={reason.selfLink}
                  className="h-24 space-x-2 md:min-w-[15%] md:max-w-[30%] items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 inline-flex px-6 py-6 transform hover:scale-105 transition-transform duration-200">
                  {!score?.reasons.some(reason => reason.reason === id) ? (
                    <>
                      <div className="h-[22px] w-[22px]">
                        <Badge />
                      </div>

                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.incomplete}
                      </h3>
                    </>
                  ) : (
                    <>
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

                      <h3
                        key={`${index}-not`}
                        className="text-sm font-medium underline">
                        {reason.completed}
                      </h3>
                    </>
                  )}
                  <div className="h-6 w-6">
                    <ChevronRight />
                  </div>
                </Link>
              )
            }
            return (
              <div
                key={`${index}-not`}
                className="h-24 space-x-2 md:min-w-[15%] md:max-w-[30%] items-center bg-neutral-800 rounded-2xl flex-row justify-center gap-2.5 inline-flex px-6 py-6 transform hover:scale-105 transition-transform duration-200">
                {!score?.reasons.some(reason => reason.reason === id) ? (
                  <>
                    <div className="h-[22px] w-[22px]">
                      <Badge />
                    </div>

                    <h3
                      key={`${index}-not`}
                      className="text-sm font-medium underline">
                      {reason.incomplete}
                    </h3>
                  </>
                ) : (
                  <>
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

                    <h3
                      key={`${index}-not`}
                      className="text-sm font-medium underline">
                      {reason.completed}
                    </h3>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ScoreResults
