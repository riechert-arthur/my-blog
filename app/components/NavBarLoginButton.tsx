"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"

const toLogin: string = "/login"

const NavBarLoginButton: FC = () => {
  
  const router = useRouter()

  return (
      <button className="p-2 text-white bg-sky-400 rounded-md" onClick={() => {
        router.push(toLogin)
			}}>Login</button>
  )
}

export default NavBarLoginButton
