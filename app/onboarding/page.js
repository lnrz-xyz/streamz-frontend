import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { CircleCheckBig } from "lucide-react"
import Link from "next/link"

export default function Onboarding() {
  return (
    <div className="h-full flex flex-col items-center justify-between flex-1">
      <CardHeader className="items-center justify-center flex flex-col pt-16">
        <CircleCheckBig className="h-12 w-12 mb-6" />
        <CardTitle className="text-3xl font-bold font-sans mb-2">
          Account Created
        </CardTitle>
        <CardDescription className="text-center text-opacity-60 text-sm font-normal">
          The more actions you take, the higher your score will be. Your score
          represents your position in the waitlist.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col items-center justify-end space-y-6 h-full my-8">
        <div className="w-14 h-2 relative">
          <div className="w-2 h-2 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <div className="w-2 h-2 left-[24px] top-0 absolute bg-zinc-700 rounded-full" />
          <div className="w-2 h-2 left-[48px] top-0 absolute bg-zinc-700 rounded-full" />
        </div>
        <Link href="/onboarding/accounts">
          <Button className="w-[385px] h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-fle text-sm font-medium font-sans">
            Start
          </Button>
        </Link>
      </CardFooter>
    </div>
  )
}
