import { Home } from "pages/Home"
import { Login } from "pages/Login"
import { NotFound } from "pages/NotFound"

export const types = {
  loggedOut: "loggedOut",
  loggedIn: "loggedIn",
  default: "default",
}

export const urls = {
  home: { component: Home, path: "/", url: "/", type: types.loggedIn },
  login: {
    component: Login,
    path: "/login",
    url: "/login",
    type: types.loggedOut,
  },
  notFound: {
    component: NotFound,
    path: "*",
    type: types.default,
  },
}
