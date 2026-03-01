import React from "react"
import Link from "next/link"
import Users from "./dashboard/users/page"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { error } from "console"

import { getSheetsData } from "@/lib/read"

const Home = async () => {
  const data = await getSheetsData();
  {
    data?.map((row, index) => (
      console.log(row[3])
    ))
  }
  return (
    <>
      <div className="text-4xl text-sky-800 underline">Learn Next Js</div>
      <div className="flex flex-column">
        <Link href="/dashboard/users">Users Dashboard</Link>
        <Link href="/article">Ini halaman article</Link>
      </div>
      {data?.map((row, index) => (
        <div key={index} className="justify-center items-center">
          {/* <img src={row[3 ]} alt="Image from sheet" /> */}
          <h1>{row[0]}</h1>
          <h2>{row[1]}</h2>
          <h3>{row[2]}</h3>
          <Image src={row[3]} alt="Image from sheet" width={200} height={200} />
        </div>
      ))}
      <img src="https://www.ipb.ac.id/wp-content/uploads/2023/12/Logo-IPB-University_Vertical.png" alt="" />
      <Button>CLICK ME</Button>
    </>
  )
}
export default Home


