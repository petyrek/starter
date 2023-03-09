import { Home } from "pages/Home"
import { Login } from "pages/Login"
import { NotFound } from "pages/NotFound"
import { FC } from "react"

export type RouteType = "loggedOut" | "loggedIn" | "default"

type UrlsObject = {
  component: FC<{}>
  path: string
  url: string
  type: RouteType
}

export const types = {
  loggedOut: "loggedOut",
  loggedIn: "loggedIn",
  default: "default",
} as const satisfies Record<RouteType, RouteType>

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
    url: "/not-found",
    type: types.default,
  },
} satisfies Record<string, UrlsObject>
