"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Balance from "./Balance"
import ConnectButton from "./ConnectButton"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center w-full absolute top-12 px-16 z-20">
      {pathname !== "/" && (
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Streamz Logo" width={64} height={64} />
        </Link>
      )}
      <div className="flex gap-2 flex-wrap ml-auto">
        <ConnectButton />
        <Balance />
      </div>
    </nav>
  )
}
