import React, { FC } from "react"

import PostCard from "./PostCard"
import { Metadata, getAllSlugs, getMetadata } from "../../lib/posts"

const PostGallery: FC = async () => {

  const slugs: string[] = await getAllSlugs()
  const metadata: Metadata[] = await Promise.all(
    slugs.map(async (slug: string) => {
      return await getMetadata(slug) 
    })
  )

  return (
    <div className="flex flex-wrap justify-center w-full max-h-screen flex p-32">
      {
        metadata.map((datum, index) => (
          <PostCard key={ index } metadata={ datum } custom={ "mr-24" } />
        ))
      } 
    </div>
  )
}

export default PostGallery
