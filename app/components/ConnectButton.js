"use client"
import { useExperiences } from "@/hooks/useExperiences"
import { useUpsertexperienceMutation } from "@/hooks/useUpsertExperienceMutation"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAccount } from "wagmi"
import { ChevronDown, LogOut, User } from "lucide-react"
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
import { useQueryClient } from "@tanstack/react-query"
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

  const { mutate } = useUpsertexperienceMutation()

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
          experienceType: "onboarding",
          metadata: {
            onboarding: false,
          },
        })
      }
    }
  }, [router, experiences, isSuccess, isExperiencesLoading, mutate])

  if (address) {
    return (
      <button className="flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-11">
        <div className="text-lg font-bold">{address.substring(0, 6)}...</div>
      </button>
    )
  }

  return (
    <button
      onClick={open}
      className="flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-11">
      <div className="text-lg font-bold">Connect</div>
    </button>
  )
}

const Dropdown = () => {
  const [loggingOut, setLoggingOut] = useState(false)

  const { mutate } = useLogoutMutation()

  const onLogout = async () => {
    setLoggingOut(true)
    mutate()
    setLoggingOut(false)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={
            "flex flex-row space-x-4 bg-background rounded-full px-4 py-2 items-center h-11"
          }>
          <div className="text-lg font-bold">{address.substring(0, 5)}...</div>
          <ChevronDown className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Airdorp eligibility</span>
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
