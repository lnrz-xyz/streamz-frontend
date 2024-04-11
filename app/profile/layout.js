import { Card } from "@/components/ui/card"

export default function ProfileLayout({ children }) {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[676px] md:min-h-[75vh] px-16 flex flex-col space-between items-center my-4">
        {children}
      </Card>
    </main>
  )
}
