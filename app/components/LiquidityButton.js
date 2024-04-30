import { CandlestickChart } from "lucide-react"
import Link from "next/link"

export default function LiquidityButton() {
  return (
    <Link
      href="/liquidity"
      className="h-full px-4 py-2 bg-background rounded-full justify-center items-center flex gap-2 transform hover:scale-105 transition-transform duration-200">
      <CandlestickChart size={20} />
      <p className="text-lg text-foreground font-bold">Liquidity</p>
    </Link>
  )
}
