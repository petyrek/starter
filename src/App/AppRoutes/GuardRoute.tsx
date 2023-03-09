import type { FC } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { urls, types, RouteType } from "pages/urls"
import { useLoggedIn } from "hooks/useLoggedIn"

type Props = {
  children: React.ReactNode
  type: RouteType
}

export const GuardRoute: FC<Props> = ({ children, type }) => {
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

  return <>{children}</>
}
