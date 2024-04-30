import { Home } from "lucide-react"
import Link from "next/link"

export default function LinkButton({ href, icon, text }) {
  return (
    <Link href={href}>
      <div className="group inline-flex items-center justify-center overflow-hidden rounded-full bg-background">
        <div
          className={`flex items-center group-hover:gap-2 justify-center group-hover:px-4 group-hover:py-2 text-white transition-all duration-500 ease-in-out
                   w-12 h-12 group-hover:sm:w-40 group-hover:rounded-lg`}>
          {icon}
          <span
            className="flex text-lg font-bold items-center justify-center overflow-hidden transition-all duration-500 ease-in-out
                         max-w-0 group-hover:sm:max-w-md">
            {text}
          </span>
        </div>
      </div>
    </Link>
  )
}
