import { Card } from "@/components/ui/card"

export default function OnboardingLayout({ children }) {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[500px] md:min-h-[75vh] px-8 flex flex-col space-between items-center my-4 rounded-3xl">
        {children}
      </Card>
    </main>
  )
}
