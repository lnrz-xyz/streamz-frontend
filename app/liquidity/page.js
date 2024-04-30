import Nav from "../components/Nav"
import Details from "./components/Details"

export default async function contracts() {
  return (
    <main className="relative flex w-screen min-h-screen flex-col pb-48">
      <div className="absolute top-4 right-8 z-10 flex flex-row space-x-2 h-11">
        <Nav />
      </div>
      <div className="min-h-screen flex flex-col space-y-24">
        <Details />
      </div>
    </main>
  )
}
