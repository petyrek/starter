import { loggedIn$ } from "data/auth/rx"
import { Routes } from "./Routes"
import React from "react"
import { ToastNotifications } from "./ToastNotifications"
import { GlobalStyle } from "./GlobalStyle"

import { ErrorBoundary } from "components/ErrorBoundary"
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

  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Routes loggedIn={loggedIn} />
      <ToastNotifications />
    </ErrorBoundary>
  )
}
