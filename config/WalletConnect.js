import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"
import { base, baseSepolia } from "wagmi/chains"
import { cookieStorage, createStorage } from "wagmi"

export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

if (!projectId) throw new Error("Project ID is not defined")
console.log("Project ID:", projectId)

const metadata = {
  name: "Streamz",
  description: "Streamz Site",
  url: "https://streamz.xyz",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

// Create wagmiConfig
const chains = [base, baseSepolia]
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  enableCoinbase: true,
  enableInjected: true,
  enableWalletConnect: true,
  enableEmail: false,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
