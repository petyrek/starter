import { loggedIn$ } from "data/auth/rx"
import { getTokensFromStorage } from "data/auth/storage"
import { useEffect, useState } from "react"

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!getTokensFromStorage().accessToken)

  useEffect(() => {
    loggedIn$.subscribe(x => {
      setLoggedIn(!!x.accessToken)
    })
  }, [])

  return loggedIn
}
