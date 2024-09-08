import React, { FC } from "react"

import { Metadata } from "../../lib/posts"
import PostTag from "./PostTag"
import PostCardReadMoreButton from "./PostCardReadMoreButton"

interface ComponentProps {
  metadata: Metadata
  custom?: string
}

const PostCard: FC<Metadata> = ({ metadata, custom }) => {

  const articlePath: string = `/blog/${ metadata.slug }`

  return (
    <div className={ `flex flex-col p-8 min-w-96 w-1/5 shadow-lg rounded-lg ${ custom }` }>
      <div className={ `w-full min-h-64 bg-${ metadata.slug }-hero bg-cover rounded-lg shadow-md` } />
      <text>{ `bg-${ metadata.slug }-hero`}</text>
      <h1 className="font-bold text-6xl mt-4">{ metadata.title }</h1>
      <text className="mt-2 text-xl">{ `By: ${ metadata.author }` }</text>
      <div className="flex mt-2 w-full">
        <PostTag text={ metadata.tag } />
      </div>
      <p className="mb-2 mt-2">{ metadata.description }</p>
      <PostCardReadMoreButton toArticle={ articlePath } />
    </div>
  )
}

export default PostCard
