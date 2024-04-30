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
    <div className="flex flex-row-reverse gap-2 flex-wrap">
      <ConnectButton />
      <Balance />

      <LinkButton icon={<HandCoins size={20} />} text="Earn" href="/score" />

      <LinkButton
        icon={<ShoppingBag size={20} />}
        text="Collect"
        href="/contracts"
      />

      <LinkButton
        icon={<Palette size={20} />}
        text="Create"
        href="/contracts"
      />
      <LinkButton
        icon={<CandlestickChart size={20} />}
        text="Liquidity"
        href="/liquidity"
      />
      <LinkButton icon={<Home size={20} />} text="Home" href="/" />
    </div>
  )
}
