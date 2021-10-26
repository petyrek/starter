import React from "react"
import { Route, Redirect } from "react-router-dom"
import { urls } from "pages/urls"
import * as R from "ramda"

export const LoggedOutRoute = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      render={p => {
        if (loggedIn)
          return (
            <Redirect
              to={R.pathOr(urls.home.url, ["location", "state", "from"], p)}
            />
          )
        return <Component {...p} />
      }}
      path={path}
    />
  )
}
