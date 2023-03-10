import { post, get } from "common/request"
import { UserLoginBody, TokenResponse } from "data/_generated"

export const authRequest = {
  login: (data: UserLoginBody) =>
    post<TokenResponse, UserLoginBody>("auth/login", data),
  register: (data: UserLoginBody) =>
    post<TokenResponse, UserLoginBody>("auth/register", data),
  user: () => get<never, TokenResponse>("auth/info"),
}
