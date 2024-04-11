"use client"

import Link from "next/link"

import GetStartedButton from "../app/components/GetStartedButton"
import { Button } from "./ui/button"
import { useCurrent } from "@/hooks/useCurrent"
import Image from "next/image"

import { useEffect, useState } from "react"
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
import { useWalletContext } from "@coinbase/waas-sdk-web-react"
import { useQueryClient } from "@tanstack/react-query"

const TopNav = () => {
  const { data: user } = useCurrent()

  const [whatTarget, setWhatTarget] = useState(null)
  const [versusTarget, setVersusTarget] = useState(null)
  const [faqTarget, setFaqTarget] = useState(null)

  useEffect(() => {
    setWhatTarget(document.getElementById("what"))
    setVersusTarget(document.getElementById("versus"))
    setFaqTarget(document.getElementById("faq"))
  }, [])

  const handleWhatClick = event => {
    event.preventDefault()
    whatTarget.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleVersusClick = event => {
    event.preventDefault()
    versusTarget.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleFaqClick = event => {
    event.preventDefault()
    faqTarget.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="absolute flex flex-row justify-between items-center top-6 w-full px-10 z-20">
      <Link href="/" className="relative">
        <Image src="/logo.png" width={120} height={40} alt="Logo" priority />
      </Link>

      <div className="flex items-center justify-end w-screen text-base font-normal font-sans leading-normal">
        <div className="hidden md:flex flex-row space-x-8 items-center justify-center">
          <a href="#what" onClick={handleWhatClick}>
            Learn more
          </a>
          <a href="#versus" onClick={handleVersusClick}>
            The Catalog
          </a>
          <a href="#faq" onClick={handleFaqClick}>
            FAQ
          </a>
          <div className="flex flex-row space-x-2 items-center">
            <a href="https://x.com/lnrzxyz" target="_blank" rel="noreferrer">
              <Image
                src="/x-logo-black.png"
                width={16}
                height={16}
                alt="X"
                className="object-contain"
              />
            </a>

            <a
              href="https://warpcast.com/lnrz"
              target="_blank"
              rel="noreferrer">
              <Image
                src="/farcaster.svg"
                width={24}
                height={24}
                alt="farcaster"
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex ml-10">
          {!user ? (
            <GetStartedButton
              className={
                "py-6 px-8 rounded-[54px] text-base font-normal font-sans leading-normal"
              }
            />
          ) : (
            <Dropdown />
          )}
        </div>
      </div>
    </nav>
  )
}

const Dropdown = () => {
  const { waas } = useWalletContext()

  const [loggingOut, setLoggingOut] = useState(false)

  const queryClient = useQueryClient()

  const onLogout = async () => {
    if (!waas) {
      return
    }
    if (loggingOut) {
      return
    }

    setLoggingOut(true)
    try {
      await waas.logout()
    } catch (error) {
      console.error(error)
    }
    queryClient.clear()
    setLoggingOut(false)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={
            "py-5 px-6 rounded-full text-base font-normal font-sans leading-normal bg-card shadow items-center justify-evenly space-x-2"
          }>
          <User className="h-6 w-6" />
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
              <span>Profile</span>
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

export default TopNav
