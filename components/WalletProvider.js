"use client"
import { WalletProvider } from "@coinbase/waas-sdk-web-react"

export default function WProvider({ children }) {
  return (
    <WalletProvider
      collectAndReportMetrics
      enableHostedBackups
      autoCreateWallet
      verbose
      prod
      projectId={process.env.NEXT_PUBLIC_COINBASE_PROJECT}>
      {children}
    </WalletProvider>
  )
}
