"use client"
import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultConfig,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiProvider, http } from "wagmi"
import { base, baseSepolia } from "wagmi/chains"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import { persistQueryClient } from "@tanstack/react-query-persist-client"
import { useEffect } from "react"

const transports =
  process.env.ENV !== "production"
    ? {
        [baseSepolia.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
      }
    : {
        [base.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
      }
const config = getDefaultConfig({
  appName: "Streamz",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
  chains: process.env.ENV !== "production" ? [baseSepolia] : [base],
  ssr: true,
  transports: transports,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})
const RainbowKit = ({ children }) => {
  useEffect(() => {
    const localStoragePersister = createSyncStoragePersister({
      storage: window.localStorage,
    })

    persistQueryClient({
      queryClient,
      persister: localStoragePersister,
    })
  }, [])
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: "#1E1F24",
            accentColorForeground: "#f7f7f7",
            borderRadius: "medium",
            overlayBlur: "small",
            fontStack: "--font-inter",
          })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
export default RainbowKit
