import { Home } from "pages/Home"
import { Login } from "pages/Login"
import { NotFound } from "pages/NotFound"
import { FC } from "react"
import { Ingredients } from "./Ingredients"
import { Meals } from "./Meals"
import { Playground } from "./Playground"

export type RouteType = "loggedOut" | "loggedIn" | "default"

export type PageProps = {}

type UrlsObject = {
  component: FC<PageProps>
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
  meals: {
    component: Meals,
    path: "/meals",
    url: "/meals",
    type: types.default,
  },
  ingredients: {
    component: Ingredients,
    path: "/ingredients",
    url: "/ingredients",
    type: types.default,
  },
  playground: {
    component: Playground,
    path: "/playground",
    url: "/playground",
    type: types.default,
  },
  notFound: {
    component: NotFound,
    path: "*",
    url: "/not-found",
    type: types.default,
  },
} as const satisfies Record<string, UrlsObject>
