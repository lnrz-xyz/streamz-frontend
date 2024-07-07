"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit"
export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated")
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}>
            {(() => {
              if (!connected) {
                // return (
                //   <button onClick={openConnectModal} type="button">
                //     Connect Wallet
                //   </button>
                // )
                return (
                  <button
                    onClick={openConnectModal}
                    className="flex flex-row gap-4 bg-background rounded-full px-4 py-2 items-center h-12 transform hover:scale-105 transition-transform duration-200 border-0">
                    <div className="text-base font-bold">Connect</div>
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="flex flex-row gap-4 bg-background rounded-full px-4 py-2 items-center h-12 transform hover:scale-105 transition-transform duration-200 border-0">
                    <div className="text-base font-bold">Wrong network</div>
                  </button>
                )
              }
              return (
                <div className="flex flex-row gap-4 bg-background rounded-full px-4 py-2 items-center h-12 transform hover:scale-105 transition-transform duration-200 border-0">
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button">
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}>
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
