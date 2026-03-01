import { getPost } from '@/lib/post'
import React from 'react'

const article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div>
      <h1>Article</h1>
      <p>{slug}</p>
      <h2>Titile: {post?.title}</h2>
      <h3>Conteng: {post?.content}</h3>
    </div>
  )
}

export default article