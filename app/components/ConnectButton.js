"use client"
import { useState } from "react"
import { useAccount, useDisconnect } from "wagmi"
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
import { useLogoutMutation } from "@/hooks/useLogoutMutation"
import { CustomConnectButton } from "./CustomConnectButton"

const ConnectButton = () => {
  const { address } = useAccount()

  if (address) {
    return <Dropdown />
  }

  return <CustomConnectButton />
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
