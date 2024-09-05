"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"

interface ComponentProps {
  toArticle: string
}

const PostCardReadMoreButton: FC<ComponentProps> = ({ toArticle }) => {
  
  const router = useRouter()

  return (
      <button className="w-fit p-2 text-white bg-sky-400 rounded-md shadow-md" onClick={() => {
        router.push(toArticle)
			}}>Read More</button>
  )
}

export default PostCardReadMoreButton
