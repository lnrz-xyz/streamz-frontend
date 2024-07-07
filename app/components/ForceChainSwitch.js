"use client"
import { useEffect } from "react"
import { useAccount, useSwitchChain, useChainId } from "wagmi"
import { base, baseSepolia } from "wagmi/chains"

const REQUIRED_CHAIN_ID = baseSepolia.id

function ForceChainSwitch() {
  const chainId = useChainId()
  const { isConnected, chainId: accountChainID } = useAccount()
  const { switchChain } = useSwitchChain()

  useEffect(() => {
    console.log("chain change?", accountChainID)
    if (accountChainID !== REQUIRED_CHAIN_ID) {
      console.log("switching to chain", REQUIRED_CHAIN_ID)
      switchChain({ chainId: REQUIRED_CHAIN_ID })
    }
  }, [accountChainID, switchChain])

  useEffect(() => {
    console.log("chainId", chainId, REQUIRED_CHAIN_ID, isConnected)
    if (isConnected && chainId !== REQUIRED_CHAIN_ID) {
      console.log("switching to chain", REQUIRED_CHAIN_ID)
      switchChain({ chainId: REQUIRED_CHAIN_ID })
    }
  }, [isConnected, chainId, switchChain])

  return null
}

export default ForceChainSwitch
