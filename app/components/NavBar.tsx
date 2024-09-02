"use server"

import React, { FC } from 'react'
import NavBarLoginButton from "./NavBarLoginButton"

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
		<div className="flex justify-between w-full h-fit px-8 pt-4">
			<div className="flex w-1/2 h-fit">
				{
					Object.keys(links).map((key) => (
						<a key={ key } href={ links[key] }>{ key }</a>
					))					
				}
			</div>
      <div className="flex">
        <form className="flex">
          <input type="text" placeholder="Search" />
          <input type="submit" />
        </form>
        <NavBarLoginButton />
      </div>
		</div>
	)
}

export default NavBar
