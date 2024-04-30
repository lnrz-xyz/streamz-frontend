"use client"
import { useExperiences } from "@/hooks/useExperiences"
import { useUpsertExperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAccount, useDisconnect } from "wagmi"
import { ChevronDown, Gem, LineChart, LogOut, User, Wallet } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLogoutMutation } from "@/hooks/useLogoutMutation"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useScore } from "@/hooks/useScore"

const ConnectButton = () => {
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  const {
    data: experiences,
    isSuccess,
    isPending: isExperiencesLoading,
  } = useExperiences()
  const router = useRouter()

  const { mutate } = useUpsertExperienceMutation()

  useEffect(() => {
    console.log("experiences", experiences, isSuccess)
    if (isSuccess && !experiences && !isExperiencesLoading) {
      console.log("experiences none")
      router.push("/onboarding")
      mutate({
        experience: "onboarding",
        metadata: {
          onboarding: true,
        },
      })

      return
    }

    if (experiences && experiences.length > 0) {
      const hasOnboardedExperience = experiences.some(
        experience => experience.experienceType === "onboarding"
      )
      console.log("hasOnboardedExperience", hasOnboardedExperience)
      if (!hasOnboardedExperience) {
        router.push("/onboarding")
        mutate({
          experience: "onboarding",
          metadata: {
            onboarding: false,
          },
        })
      }
    }
  }, [router, experiences, isSuccess, isExperiencesLoading, mutate, address])

  if (address) {
    return <Dropdown />
  }

  return (
    <button
      onClick={open}
      className="flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-11 transform hover:scale-105 transition-transform duration-200 border-0">
      <div className="text-lg font-bold">Connect</div>
    </button>
  )
}

const Dropdown = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const [loggingOut, setLoggingOut] = useState(false)

  const { data: scoreData } = useScore()

  const { mutate } = useLogoutMutation()

  const onLogout = async () => {
    setLoggingOut(true)
    mutate()
    disconnect()
    setLoggingOut(false)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={
            "flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-11 hover:scale-105 transition-transform duration-200 border-0"
          }>
          <div className="text-lg font-bold">{address.substring(0, 5)}...</div>
          <ChevronDown className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/score">
            <DropdownMenuItem>
              <Gem className="mr-2 h-4 w-4" />
              <span>Airdrop eligibility</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Link href="/contracts">
            <DropdownMenuItem>
              <LineChart className="mr-2 h-4 w-4" />
              <span>Earn Streamz</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Connected Accounts</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        {scoreData && scoreData.balance && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <a
                href={`https://app.uniswap.org/explore/tokens/base/${process.env.NEXT_PUBLIC_STREAMZ_ADDRESS}`}
                target="_blank"
                rel="noreferrer">
                <DropdownMenuItem>
                  <Wallet className="mr-2 h-4 w-4" />
                  <span>{scoreData.balance} STRM</span>
                </DropdownMenuItem>
              </a>
            </DropdownMenuGroup>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500"
          onClick={onLogout}
          disabled={loggingOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ConnectButton
