import Header from "@/app/components/Header"
import Opener from "@/app/components/Opener"
import Tokenomics from "@/app/components/Tokenomics"
import Community from "@/app/components/Community"
import ConnectButton from "./components/ConnectButton"

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col pb-16">
      <div className="absolute top-4 right-8">
        <ConnectButton />
      </div>
      <div className="min-h-screen">
        <Header />
        <Opener />
      </div>
      <div className="flex flex-col px-8 pt-28 space-y-28 w-full">
        <Tokenomics />
        <Community />
      </div>
    </main>
  )
}
