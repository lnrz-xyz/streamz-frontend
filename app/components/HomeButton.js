import { Home } from "lucide-react"
import Link from "next/link"

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="aspect-square h-full p-2 bg-background rounded-full justify-center items-center flex transform hover:scale-105 transition-transform duration-200">
      <Home size={20} />
    </Link>
  )
}
