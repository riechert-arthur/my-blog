import React, { FC } from "react"

import { Metadata } from "../../lib/posts"

const PostCard: FC<Metadata> = ({ metadata }) => {
  return (
    <div>
      <h1>{ metadata.title }</h1>
      <text>{ metadata.tag }</text>
      <text>{ metadata.author }</text>
      <p>{ metadata.description }</p>
    </div>
  )
}

export default PostCard
