import { post, get } from "common/request"
import { Tokens } from "./types"

export type LoginData = {
  email: string
  password: string
}

export const authRequest = {
  login: (data: LoginData) => post<Tokens, LoginData>("auth/login", data),
  register: (data: LoginData) => post<Tokens, LoginData>("auth/register", data),
  user: () => get<never, Tokens>("auth/info"),
}
