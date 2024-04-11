import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export default function ProfileLayout({ children }) {
  return (
    <Suspense fallback={<Skeleton className="h-4 w-[250px]" />}>
      {children}
    </Suspense>
  )
}
