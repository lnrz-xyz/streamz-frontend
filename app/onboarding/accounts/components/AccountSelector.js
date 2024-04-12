"use client"

import { Badge } from "@/components/ui/badge"
import { useConnectedAccounts } from "@/hooks/useConnectedAccounts"
import Image from "next/image"
import { FaSpotify } from "react-icons/fa"
import { useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { useCurrent } from "@/hooks/useCurrent"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Loader2, Plus } from "lucide-react"
import { useConnectEmailMutation } from "@/hooks/useConnectEmailMutation"
const AccountSelector = () => {
  const { data: accounts } = useConnectedAccounts()

  const { data: current } = useCurrent()

  const spotifyAccount = useMemo(() => {
    return accounts?.find(account => account.accountType === "spotify")
  }, [accounts])

  const xAccount = useMemo(() => {
    return accounts?.find(account => account.accountType === "x")
  }, [accounts])

  const emailAccount = useMemo(() => {
    return accounts?.find(account => account.accountType === "email")
  }, [accounts])

  useEffect(() => {
    console.log("connected accounts", accounts)
  }, [accounts])

  const { mutate, isPending, isSuccess, error } = useConnectEmailMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success("Email added successfully")
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      toast.error("Failed to add email: " + error)
    }
  }, [error])

  const onAddEmail = () => {
    const inputVal = document.getElementById("email").value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!inputVal || !emailRegex.test(inputVal)) {
      toast.error("Please enter a valid email address")
      return
    }

    console.log("email input", inputVal)
    const checkboxVal = document.getElementById("optin").checked
    console.log("optin checkbox", checkboxVal)

    // Add email account

    mutate({
      email: inputVal,
      optin: checkboxVal,
    })
  }

  const searchParams = useSearchParams()

  useEffect(() => {
    console.log("search params", searchParams)
    if (searchParams.get("spotify_connected")) {
      toast.success("Spotify connected successfully")
    } else if (searchParams.get("x_connected")) {
      toast.success("X connected successfully")
    } else if (searchParams.get("error_type") === "spotify_connection_error") {
      toast.error("Failed to connect Spotify: " + searchParams.get("error"))
    } else if (searchParams.get("error_type") === "spotify_redirect_error") {
      toast.error("Failed to connect Spotify: " + searchParams.get("error"))
    } else if (searchParams.get("error_type") === "x_connection_error") {
      toast.error("Failed to connect X: " + searchParams.get("error"))
    } else if (searchParams.get("error_type") === "x_redirect_error") {
      toast.error("Failed to connect X: " + searchParams.get("error"))
    } else if (searchParams.get("error")) {
      toast.error("Failed to connect account: " + searchParams.get("error"))
    }
  }, [searchParams])

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {!spotifyAccount ? (
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/connected/accounts/spotify/login`}>
          <div className="bg-background h-12 w-36 rounded-full relative">
            <Image
              priority
              src="/spotify_logo.png"
              fill
              className="object-contain px-4 py-2"
              alt="Spotify Connect button"
            />
          </div>
        </a>
      ) : (
        <Badge variant="outline" className="text-base font-sans px-4 py-2">
          <FaSpotify size={20} />
          <span className="pl-2">{spotifyAccount.metadata.display_name}</span>
        </Badge>
      )}
      {!xAccount ? (
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/connected/accounts/x/login?address=${current?.evmAddress}`}>
          <div className="bg-background h-12 w-12 rounded-sm aspect-square items-center justify-center flex relative">
            <Image
              priority
              src="/x-logo.svg"
              fill
              className="object-contain p-3"
              alt="X Connect button"
            />
          </div>
        </a>
      ) : (
        <Badge variant="outline" className="text-base font-sans px-4 py-2">
          <Image
            priority
            src="/x-logo-black.png"
            width={20}
            height={20}
            alt="X Connect button"
          />
          <span className="pl-2">{xAccount.metadata.name}</span>
        </Badge>
      )}
      {xAccount && (
        <div className="flex flex-col items-center justify-center space-y-4 pt-8">
          <p className="text-center text-zinc-600 text-opacity-60 text-sm font-normal font-sans leading-snug">
            Follow us on Twitter{" "}
            <a
              href="https://x.com/lnrzxyz"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline">
              @lnrzxyz
            </a>{" "}
            to further increase your position in the waitlist.
          </p>
        </div>
      )}
      <Separator className="w-full" />
      {!emailAccount ? (
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex flex-row space-x-2 items-center">
            <h4 className="font-medium font-sans">Email: </h4>
            <Input id="email" type="email" placeholder="user@gmail.com" />
            <Button
              size="icon"
              variant="outline"
              disabled={isPending}
              onClick={onAddEmail}
              className="h-full aspect-square justify-center items-center p-1">
              {isPending ? <Loader2 className="animate-spin" /> : <Plus />}
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="optin" />
            <label
              htmlFor="optin"
              className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Opt-in to receive updates through email
            </label>
          </div>
        </div>
      ) : (
        <h4 className="font-medium font-sans">
          {emailAccount.accountIdentifier}
        </h4>
      )}
      {spotifyAccount && xAccount && emailAccount && (
        <div className="flex flex-col items-center justify-center space-y-4 pt-8">
          <h4 className="text-neutral-950 text-lg font-semibold font-sans">
            All accounts connected
          </h4>
          <p className="text-center text-zinc-600 text-opacity-60 text-sm font-normal font-sans leading-snug">
            You have successfully connected all your accounts, this
            significantly increases your position in the waitlist.
          </p>
        </div>
      )}
    </div>
  )
}

export default AccountSelector
