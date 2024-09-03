import React, { FC } from "react"

import { Metadata } from "../../lib/posts"
import PostTag from "./PostTag"

const PostCard: FC<Metadata> = ({ metadata }) => {
  return (
    <div className="flex flex-col p-8 shadow-md rounded-ld">
      <h1 className="font-bold text-6xl">{ metadata.title }</h1>
      <text className="text-xl">{ `By: ${ metadata.author }` }</text>
      <div className="flex w-full">
        <PostTag text={ metadata.tag } />
      </div>
      <p>{ metadata.description }</p>
    </div>
  )
}

export default PostCard
