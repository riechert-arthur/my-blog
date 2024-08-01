import React from 'react'

interface Links {
	[destination: string]: string
}

const links: Links = {
	"About": "/about",
	"Contact": "/contact",
	"Blog": "/blog",
}

const NavBar = () => {
	return (
		<div className="flex w-full h-fit">
			<div className="flex w-1/2 h-fit">
				{
          Object.keys(links).map((key) => (
            <a key={ key } href={ links[key] }>{ key }</a>
          ))					
				}
			</div>			
		</div>	
	)
}

export default NavBar
