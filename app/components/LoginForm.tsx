import React, { FC } from "react"

const LoginForm = (): FC => {
  return (
    <form className="flex flex-col">
      <label>Username:</label>
      <input name="username" placeholder="username" />
      <label>Password:</label>
      <input name="password" placeholder="password" />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
