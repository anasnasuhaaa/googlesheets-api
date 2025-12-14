import React from "react"
import Link from "next/link"
import Users from "./dashboard/users/page"
import { Button } from "@/components/ui/button"
const Home = () => {
  return (
    <>
      <div className="text-4xl text-sky-800 underline">Learn Next Js</div>
      <Link href="/dashboard/users">Testing</Link>
      <Link href="/"><Button>Click Me</Button></Link>
      <Users></Users>
      <Button>CLICK ME</Button>
    </>
  )
}
export default Home


