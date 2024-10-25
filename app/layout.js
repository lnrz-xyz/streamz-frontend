import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"
import RainbowKit from "@/context/RainbowKit"
import { Toaster } from "@/components/ui/sonner"
import { AudioContextProvider } from "@/app/components/PlayButton"
import { Analytics } from "@vercel/analytics/react"
import ForceChainSwitch from "./components/ForceChainSwitch"
import Nav from "./components/Nav"

const Circular = localFont({
  src: [
    {
      path: "./fonts/CircularXXWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/CircularXXWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "./fonts/CircularXXWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-circular",
})

export const metadata = {
  title: "Streamz",
  description: "Redefining the notion of onchain music communities.",
  openGraph: {
    title: "Streamz",
    description: "Redefining the notion of onchain music communities.",
    url: "https://streamzonbase.com",
    siteName: "Streamz",
    images: [
      {
        url: "https://storage.googleapis.com/streamz-scores/Streamz_green_logo.png", // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamz",
    description: "Redefining the notion of onchain music communities.",
    siteId: "1777713899925917696",
    creator: "@streamzonbase",
    creatorId: "1777713899925917696",
    images: [
      "https://storage.googleapis.com/streamz-scores/Streamz_green_logo.png",
    ],
  },
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
        <RainbowKit>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange>
            <Analytics />
            <ForceChainSwitch />
            <AudioContextProvider>
              <div className="max-w-screen-2xl w-full mx-auto flex flex-col justify-center items-center relative">
                <Nav />

                {children}
              </div>
            </AudioContextProvider>
            <Toaster />
          </ThemeProvider>
        </RainbowKit>
      </body>
    </html>
  )
}
