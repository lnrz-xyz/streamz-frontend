import Balance from "./Balance"
import ConnectButton from "./ConnectButton"
import ContractsButton from "./ContractsButton"
import EarnButton from "./EarnButton"
import HomeButton from "./HomeButton"
import LiquidityButton from "./LiquidityButton"

export default function Nav() {
  return (
    <div className="flex flex-row-reverse gap-2 max-w-2xl flex-wrap">
      <ConnectButton />
      <EarnButton />
      <ContractsButton />
      <LiquidityButton />
      <HomeButton />
      <Balance />
    </div>
  )
}
