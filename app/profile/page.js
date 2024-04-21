import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import AccountSelector from "../onboarding/accounts/components/AccountSelector"

export default function Wallets() {
  return (
    <>
      <CardHeader className="items-center justify-center flex flex-col pt-12">
        <CardTitle className="text-xl font-semibold">Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col py-12 w-full">
        <div className="flex flex-row items-center justify-between">
          <h4 className="w-1/2 text-sm font-medium font-sans">Accounts</h4>
          <div className="flex flex-col items-center w-full">
            <AccountSelector />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-end space-y-6 h-full my-4 w-full">
        <Link href="/" className="w-full">
          <Button className="w-full h-11 px-5 py-3.5 rounded-[32px] justify-center items-center gap-2.5 inline-flex text-sm font-medium font-sans">
            Save Changes
          </Button>
        </Link>
      </CardFooter>
    </>
  )
}
