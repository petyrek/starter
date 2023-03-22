import { post, get } from "common/request"
import { UserLoginBody, TokenResponse, UserResponse } from "data/_generated"

export const authRequest = {
  login: (data: UserLoginBody) =>
    post<TokenResponse, UserLoginBody>("auth/login", data),
  register: (data: UserLoginBody) =>
    post<TokenResponse, UserLoginBody>("auth/register", data),
  user: () => get<UserResponse>("auth/info"),
}
