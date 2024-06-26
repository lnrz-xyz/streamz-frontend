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
import { useLogoutMutation } from "@/hooks/useLogoutMutation"

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
      router.push("/score")
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
        router.push("/score")
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
      className="flex flex-row gap-4 bg-background rounded-full px-4 py-2 items-center h-12 transform hover:scale-105 transition-transform duration-200 border-0">
      <div className="text-base font-bold">Connect</div>
    </button>
  )
}

const Dropdown = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const [loggingOut, setLoggingOut] = useState(false)

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
        <div
          variant="outline"
          className={
            "hover:cursor-pointer flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-12 hover:scale-105 transition-transform duration-200 border-0"
          }>
          <div className="text-base font-bold">
            {address.substring(0, 5)}...
          </div>
          <ChevronDown className="h-6 w-6" />
        </div>
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
