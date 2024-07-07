import {
  CandlestickChart,
  HandCoins,
  Home,
  Palette,
  ShoppingBag,
} from "lucide-react"
import Balance from "./Balance"
import ConnectButton from "./ConnectButton"
import LinkButton from "./LinkButton"

export default function Nav() {
  return (
    <div className="flex flex-row-reverse gap-2 flex-wrap absolute top-12 right-16 z-20">
      <ConnectButton />
      <Balance />

      <LinkButton
        icon={<CandlestickChart size={20} />}
        text="Liquidity"
        href="/liquidity"
      />
      <LinkButton icon={<Home size={20} />} text="Home" href="/" />
    </div>
  )
}
