import { post, get } from "common/request"

export const authRequest = {
  login: data => post("auth/login", data),
  register: data => post("auth/register", data),
  user: () => get("auth/info"),
}
