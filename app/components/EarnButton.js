import { HandCoins } from "lucide-react"
import Link from "next/link"

export default function EarnButton() {
  return (
    <Link
      href="/score"
      className="h-full px-4 py-2 bg-background rounded-full justify-center items-center flex gap-2 transform hover:scale-105 transition-transform duration-200">
      <HandCoins size={20} />
      <p className="text-lg text-foreground font-bold">Earn</p>
    </Link>
  )
}
