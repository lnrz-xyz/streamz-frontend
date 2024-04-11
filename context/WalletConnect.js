"use client"

import React, { useEffect } from "react"
import { config, projectId } from "@/config/WalletConnect"

import { createWeb3Modal } from "@web3modal/wagmi/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { WagmiProvider } from "wagmi"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import { persistQueryClient } from "@tanstack/react-query-persist-client"

// Setup queryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

if (!projectId) throw new Error("Project ID is not defined")

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false,
  enableOnramp: false,
})

export default function Web3ModalProvider({ children, initialState }) {
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
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
