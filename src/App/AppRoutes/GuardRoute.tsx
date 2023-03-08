
import { Navigate, useLocation } from "react-router-dom"
import { urls, types } from "pages/urls"
import { useLoggedIn } from "hooks/useLoggedIn"

export const GuardRoute = ({ children, type }) => {
  const loggedIn = useLoggedIn()
  const location = useLocation()

  if (loggedIn && type === types.loggedOut) {
    return (
      <Navigate
        to={location?.state?.from?.pathname ?? urls.home.url}
        state={{ from: location }}
      />
    )
  }

  if (!loggedIn && type === types.loggedIn) {
    return <Navigate to={urls.login.url} state={{ from: location }} />
  }

  return children
}
