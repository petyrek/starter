import React from "react"
import { Route, Redirect } from "react-router-dom"
import { urls } from "pages/urls"

export const LoggedInRoute = ({
  component: Component,
  path,
  user,
  loggedIn,
  ...rest
}) => {
  return (
    <Route
      render={p => {
        if (!loggedIn) {
          return (
            <Redirect
              to={{ pathname: urls.login.url, state: { from: p.location } }}
            />
          )
        }
        return <Component {...p} user={user} {...rest} />
      }}
      path={path}
    />
  )
}
