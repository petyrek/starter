import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { urls, types } from "pages/urls"
import { LoggedOutRoute } from "./LoggedOutRoute"
import { LoggedInRoute } from "./LoggedInRoute"
import * as R from "ramda"

export const Routes = ({ user, loggedIn }) => (
  <BrowserRouter>
    <Switch>
      {R.values(urls).map(x => {
        if (x.type === types.loggedOut)
          return (
            <LoggedOutRoute
              key={x.path}
              component={x.component}
              path={x.path}
              loggedIn={loggedIn}
              exact
            />
          )
        if (x.type === types.loggedIn) {
          return (
            <LoggedInRoute
              key={x.path}
              component={x.component}
              path={x.path}
              user={user}
              loggedIn={loggedIn}
              exact
            />
          )
        }
        return (
          <Route
            render={p => <x.component {...p} />}
            exact
            path={x.path}
            key={x.path}
          />
        )
      })}
    </Switch>
  </BrowserRouter>
)
