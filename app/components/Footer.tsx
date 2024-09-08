import React, { FC } from "react"

import { settings } from "../../lib/settings" 

const Footer: FC = () => {
  return (
    <div className="flex justify-center w-full p-8 bg-zinc-900 text-white">
      <div className="flex justify-between justify-center w-1/4 max-w-52">
        {
          Object.keys(settings.primaryRoutes).map(key => (
            <a key={ key } href={ settings.primaryRoutes[key] }>{ key }</a>
          ))
        }
      </div>
    </div>
  )
}

export default Footer
