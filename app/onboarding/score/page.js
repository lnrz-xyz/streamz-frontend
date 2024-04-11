import { Button } from "@/components/ui/button"
import ScoreDisplay from "./components/ScoreDisplay"
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Activity } from "lucide-react"
import Link from "next/link"

export default function Score() {
  return (
    <>
      <CardHeader className="items-center justify-center flex flex-col pt-12">
        <Activity className="h-12 w-12 mb-6" />
        <CardTitle className="text-neutral-950 text-xl font-semibold font-sans mb-2">
          Onboarding Complete
        </CardTitle>
        <CardDescription className="text-center text-zinc-600 text-opacity-60 text-sm font-normal font-sans leading-snug">
          Your score is a combined metric of your activity in music, optimism,
          base, as well as external accounts like twitter and spotify.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        <ScoreDisplay />
      </CardContent>
      <CardFooter className="flex flex-col min-h-32 items-center justify-end my-4 space-y-8">
        <h4 className="font-sans mt-16 text-center text-lg leading-snug">
          Follow us on twitter{" "}
          <a
            href="https://x.com/lnrzxyz"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline">
            @lnrzxyz
          </a>{" "}
          and farcaster{" "}
          <a
            href="https://warpcast.com/lnrz"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline">
            @lnrz
          </a>{" "}
          to keep updated on what is to come...
        </h4>
        <Link href="/">
          <Button
            variant="outline"
            className="w-[385px] h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex text-sm font-medium font-sans">
            Go Home
          </Button>
        </Link>
      </CardFooter>
    </>
  )
}
