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
		<div className="flex w-full h-fit">
			<div className="flex w-1/2 h-fit">
				{
					Object.keys(links).map((key) => (
						<a key={ key } href={ links[key] }>{ key }</a>
					))					
				}
			</div>
			<form className="flex">
				<input type="text" placeholder="Search" />
				<input type="submit" />
			</form>
      <NavBarLoginButton />
		</div>
	)
}

export default NavBar
