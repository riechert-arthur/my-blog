import React, { FC } from "react"

import { settings } from "../../lib/settings" 

interface ComponentProps {
  text: string
}

const PostTag: FC<ComponentProps> = ({ text }) => {
 
  const bgColor: string = settings.options.tags[text] 
  console.log( bgColor ? bgColor : "bg-yellow-400")

  return (
    <div className={ `w-fit px-2 rounded-full ${ bgColor ? bgColor : "bg-yellow-400"}` }>
      <text>{ text }</text>
    </div>
  )
}

export default PostTag
