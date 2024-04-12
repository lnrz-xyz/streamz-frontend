"use client"
import { Button } from "@/components/ui/button"
import { useConnectedAddresses } from "@/hooks/useConnectedAddresses"
import { useConnectAddressMutation } from "@/hooks/useConnectAddressMutation"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useEffect, useCallback } from "react"
import { useAccount, useDisconnect } from "wagmi"
import { useSignMessage } from "wagmi"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Plus } from "lucide-react"

const WalletSelector = () => {
  return <WalletButtons />
}

const WalletButtons = () => {
  const { disconnect } = useDisconnect()
  const { open } = useWeb3Modal()
  const { isConnected, address, isConnecting, isDisconnected, isReconnecting } =
    useAccount()
  const { signMessage } = useSignMessage()
  const { mutate: connectWallet, error } = useConnectAddressMutation()

  const { data: evmAddresses, isLoading } = useConnectedAddresses()

  const onConnect = useCallback(
    async addr => {
      signMessage(
        { message: "lnrz.xyz", account: addr },
        {
          onSuccess: (signature, variables) => {
            console.log("signature", signature)
            console.log("variables", variables)
            connectWallet({ evmAddress: variables.account, signature })
            disconnect()
            toast.success("Wallet connected successfully")
          },
          onError: e => {
            console.error(e)
            disconnect()
            toast.error("Failed to connect wallet: " + e.message)
          },
        }
      )
    },
    [signMessage, connectWallet, disconnect]
  )

  useEffect(() => {
    disconnect()
  }, [disconnect])

  useEffect(() => {
    if (
      !isConnected ||
      isLoading ||
      isConnecting ||
      isDisconnected ||
      isReconnecting
    ) {
      console.log(
        "not connected or loading",
        isConnected,
        isLoading,
        isConnecting,
        isDisconnected,
        isReconnecting
      )
      return
    }
    const alreadyConnected = evmAddresses
      ?.map(addr => addr.toLowerCase())
      .includes(address?.toLowerCase())

    if (alreadyConnected) {
      console.log("already connected")
      return
    }

    onConnect(address)
  }, [
    address,
    evmAddresses,
    isConnected,
    onConnect,
    isLoading,
    isConnecting,
    isDisconnected,
    isReconnecting,
  ])

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <div className="w-full flex flex-col space-y-4 items-center justify-cener">
      <div className="flex flex-row flex-wrap space-x-2">
        {evmAddresses?.map(evmAddress => (
          <Badge
            className="font-sans flex flex-col text-sm px-4 py-2"
            variant="outline"
            key={evmAddress}>
            <p>{evmAddress.slice(0, 6)}...</p>
          </Badge>
        ))}
      </div>

      {!evmAddresses?.length && (
        <p className="font-normal text-sm">No wallets connected</p>
      )}
      {evmAddresses?.length > 0 && (
        <div className="flex flex-col items-center justify-center space-y-4 pt-8">
          <p className="text-center text-zinc-600 text-opacity-60 text-sm font-normal font-sans leading-snug">
            Follow us on farcaster{" "}
            <a
              href="https://warpcast.com/streamzonbase"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline">
              @lnrz
            </a>{" "}
            to further increase your position in the waitlist.
          </p>
        </div>
      )}
      <Button
        onClick={open}
        variant="outline"
        className="w-full h-11 px-4 py-3.5 bg-background rounded-lg">
        <Plus />
      </Button>
    </div>
  )
}

export default WalletSelector
