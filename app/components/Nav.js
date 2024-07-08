import Balance from "./Balance"
import ConnectButton from "./ConnectButton"

export default function Nav() {
  return (
    <div className="flex flex-row-reverse gap-2 flex-wrap absolute top-12 right-16 z-20">
      <ConnectButton />
      <Balance />
    </div>
  )
}
