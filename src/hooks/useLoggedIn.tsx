import { loggedIn$ } from "data/auth/rx"
import { getTokensFromStorage } from "data/auth/storage"


export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = React.useState(!!getTokensFromStorage().accessToken)

  React.useEffect(() => {
    loggedIn$.subscribe(x => {
      setLoggedIn(x.accessToken)
    })
  }, [])

  return loggedIn
}
