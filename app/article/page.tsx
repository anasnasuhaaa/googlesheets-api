import { title } from 'process'
import Link from 'next/link'
import React from 'react'

const articles = [
  { slug: "sawit", title: "Menanam Sawit" },
  { slug: "jagung", title: "Menanam Jagung" },
  { slug: "singkong", title: "Menanam Singkong" }
]

const page = () => {
  return (
    <div>
      <div>Ini halaman article</div>
      <ul>
        {articles.map((a) => (
          <li key={a.slug}><Link href={`/article/${a.slug}`} className='text-red-600'>{a.title}</Link></li>
        ))
        }
      </ul >
    </div >
  )
}

export default page
