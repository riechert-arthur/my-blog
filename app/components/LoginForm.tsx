import React, { FC } from "react"

const signupRedirect: string = "/signup"

const LoginForm: FC = () => {
  return (
    <form className="flex flex-col">
      <label>Username:</label>
      <input name="username" placeholder="username" />
      <label>Password:</label>
      <input name="password" placeholder="password" />
      <text>Click <a href={ signupRedirect }>here</a> to sign up.</text>
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
