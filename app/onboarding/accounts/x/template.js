import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export default function SpotifyLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Suspense fallback={<Skeleton className="h-4 w-[250px]" />}>
        {children}
      </Suspense>
    </div>
  )
}
