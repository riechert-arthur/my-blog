"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"

const toLogin: string = "/login"

const NavBarLoginButton: FC = () => {
  
  const router = useRouter()

  return (
      <button onClick={() => {
        router.push(toLogin)
			}}>Login</button>
  )
}

export default NavBarLoginButton
