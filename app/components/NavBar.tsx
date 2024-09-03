import React, { FC } from 'react'

import NavBarLoginButton from "./NavBarLoginButton"
import { settings } from "../../lib/settings"

interface Links {
	[destination: string]: string
}

const links: Links = {
	"About": "/about",
	"Contact": "/contact",
	"Blog": "/blog",
}

const NavBar: FC = () => {
	return (
		<div className="absolute flex justify-between items-center w-full h-fit px-8 pt-4 text-xl text-white">
      <h1>{ settings.metadata.title }</h1>
      <div className="flex h-fit items-center">
        {	
          Object.keys(links).map((key) => (
						<a className="mr-6" key={ key } href={ links[key] }>{ key }</a>
					))					
				}
        <form className="flex pr-4">
          <input className="p-1 mr-2 border-solid border-2 border-gray-100 rounded-md bg-transparent" type="text" placeholder="Search" />
          <input className='scale-75 bg-search-icon bg-no-repeat text-transparent hover:cursor-pointer' type="submit" />
        </form>
        <NavBarLoginButton />
      </div>
		</div>
	)
}

export default NavBar
