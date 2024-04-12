import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"
import Web3ModalProvider from "@/context/WalletConnect"
import { Toaster } from "@/components/ui/sonner"
import { AudioContextProvider } from "@/app/components/PlayButton"

const Circular = localFont({
  src: [
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-Bold.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/CircularXX/CircularXXTrialWeb-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-circular",
})

export const metadata = {
  title: "Streamz",
  description: "Earn more for less streamed music",
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={cn(
          "min-h-screen max-w-screen bg-background font-sans antialiased overscroll-none overflow-x-hidden",
          Circular.variable
        )}>
        <Web3ModalProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange>
            <AudioContextProvider>{children}</AudioContextProvider>
            <Toaster />
          </ThemeProvider>
        </Web3ModalProvider>
      </body>
    </html>
  )
}
