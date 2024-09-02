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
    <div>
      {
        metadata.map((datum) => (
          <PostCard metadata={ datum } />
        ))
      } 
    </div>
  )
}

export default PostGallery