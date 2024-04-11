import { Button } from "@/components/ui/button"
import Link from "next/link"
import WalletSelector from "./components/WalletSelector"
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Wallet } from "lucide-react"

export default function Wallets() {
  return (
    <>
      <CardHeader className="items-center justify-center flex flex-col pt-12">
        <Wallet className="h-12 w-12 mb-6" />
        <CardTitle className="text-neutral-950 text-xl font-semibold font-sans mb-2">
          Connect External Wallets
        </CardTitle>
        <CardDescription className="text-center text-zinc-600 text-opacity-60 text-sm font-normal font-sans leading-snug">
          Adding external wallets will increase your position in the waitlist.
          We factor in your activity in music, optimism chain activity, and base
          chain activity. Connect multiple wallets to increase your position.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        <WalletSelector />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-end space-y-6 h-full my-4">
        <div className="w-14 h-2 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
          <div className="w-2 h-2 left-[24px] top-0 absolute bg-zinc-300 rounded-full" />
          <div className="w-2 h-2 left-[48px] top-0 absolute bg-neutral-950 rounded-full" />
        </div>
        <Link href="/onboarding/score">
          <Button className="w-[385px] h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex text-sm font-medium font-sans">
            Complete
          </Button>
        </Link>
        <Link href="/onboarding/accounts">
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
