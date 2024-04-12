import { Button } from "@/components/ui/button"
import ScoreDisplay from "./components/ScoreDisplay"
import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  Card,
} from "@/components/ui/card"
import { Activity } from "lucide-react"
import Link from "next/link"
import ScoreResults from "./components/ScoreResults"

export default function Score() {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-8">
      <ScoreResults />
    </main>
  )
}
