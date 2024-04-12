import { Button } from "@/components/ui/button"
import Link from "next/link"
import AccountSelector from "./components/AccountSelector"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { CircleUserRound } from "lucide-react"

export default function Accounts() {
  return (
    <>
      <CardHeader className="items-center justify-center flex flex-col pt-12">
        <CircleUserRound className="h-12 w-12 mb-6" />
        <CardTitle className="text-3xl font-bold font-sans mb-2">
          Connect External Accounts
        </CardTitle>
        <CardDescription className="text-center text-opacity-60 text-sm font-normal">
          Add Spotify, Twitter, and Email to increase your score for the
          airdrop.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-8">
        <Suspense fallback={<Skeleton className="h-4 w-full" />}>
          <AccountSelector />
        </Suspense>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-end space-y-6 h-full my-4">
        <div className="w-14 h-2 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-zinc-700 rounded-full" />
          <div className="w-2 h-2 left-[24px] top-0 absolute bg-zinc-300 rounded-full" />
          <div className="w-2 h-2 left-[48px] top-0 absolute bg-zinc-700 rounded-full" />
        </div>
        <Link href="/onboarding/wallets">
          <Button className="w-[385px] h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex text-sm font-medium font-sans">
            Continue
          </Button>
        </Link>
        <Link href="/onboarding">
          <Button
            variant="outline"
            className="w-[385px] h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex text-sm font-medium font-sans">
            Back
          </Button>
        </Link>
      </CardFooter>
    </>
  )
}
