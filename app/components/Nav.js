"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Balance from "./Balance"
import ConnectButton from "./ConnectButton"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center w-full absolute top-4 md:top-12 px-4 md:px-16 z-20">
      {pathname !== "/" && (
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Streamz Logo" width={64} height={64} />
        </Link>
      )}
      {pathname === "/" && (
        <div className="gap-2 flex-wrap ml-auto items-center justify-end hidden md:flex">
          <ConnectButton />
          <Balance />
        </div>
      )}
    </nav>
  )
}
