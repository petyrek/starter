import { loggedIn$, logout } from "data/auth/rx"
import { Login } from "pages/Login"
import { Content } from "./Content"
import React from "react"

const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = React.useState()

  React.useEffect(() => {
    loggedIn$.subscribe(x => {
      setLoggedIn(x.accessToken)
    })
  }, [])

  return loggedIn
}

export const App = () => {
  const loggedIn = useLoggedIn()

  if (!loggedIn) return <Login />

  return (
    <>
      <button onClick={logout}>logout</button>
      <Content />
    </>
  )
}
