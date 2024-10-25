"use client"
import { useAccount, useDisconnect } from "wagmi"
import { ChevronDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

  const onLogout = async () => {
    disconnect()
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
        <DropdownMenuItem className="text-red-500" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ConnectButton
