import { post, get } from "common/request"
import { UserLogin, Token } from "data/_generated"

export const authRequest = {
  login: (data: UserLogin) => post<Token, UserLogin>("auth/login", data),
  register: (data: UserLogin) => post<Token, UserLogin>("auth/register", data),
  user: () => get<never, Token>("auth/info"),
}
