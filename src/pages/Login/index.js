import React from "react"
import { authRequest } from "data/auth/api"
import { login } from "data/auth/rx"

export const Login = () => {
  const [v, setV] = React.useState({
    email: "john@doe.com",
    password: "hunter2",
  })

  return (
    <>
      <input
        value={v.email}
        onChange={e => setV({ ...v, email: e.target.value })}
      />
      <input
        value={v.password}
        onChange={e => setV({ ...v, password: e.target.value })}
      />
      <button
        type="submit"
        onClick={() => {
          authRequest.login(v).subscribe(v => {
            login(v.data)
          })
        }}
      >
        sign in
      </button>
    </>
  )
}
