import React, { FC } from "react"

const SignUpForm: FC = () => {
  return (
    <form className="flex flex-col">
      <label>Username:</label>
      <input name="username" placeholder="username" />
      <label>Password:</label>
      <input name="password" placeholder="password" />
      <label>Email:</label>
      <input name="email" placeholder="email" />
      <label>First Name:</label>
      <input name="first_name" placeholder="first_name" />
      <label>Last Name</label>
      <input name="last_name" placeholder="last_name" />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm
