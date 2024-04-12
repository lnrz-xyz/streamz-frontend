import Header from "@/app/components/Header"
import Opener from "@/app/components/Opener"
import Tokenomics from "@/app/components/Tokenomics"
import Community from "@/app/components/Community"
import ConnectButton from "@/app/components/ConnectButton"
import Buy from "@/app/components/Buy"
import AirdropCTA from "./components/AirdropCTA"
import Footer from "./components/Footer"

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
      <div className="flex flex-col px-8 py-16 pb-16 space-y-28 w-full">
        <Buy />
        <Tokenomics />
        <Community />
      </div>
      <AirdropCTA />
      <Footer />
    </main>
  )
}
