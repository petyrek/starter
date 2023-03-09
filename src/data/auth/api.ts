import { post, get } from "common/request"

export type LoginData = {
  email: string
  password: string
}

export const authRequest = {
  login: (data: LoginData) => post("auth/login", data),
  register: (data: LoginData) => post("auth/register", data),
  user: () => get("auth/info"),
}
