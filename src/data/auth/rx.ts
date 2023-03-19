import { TokenResponse } from "data/_generated"
import { Subject } from "rxjs"
import { persistTokens, clearTokens } from "./storage"

export const loggedIn$ = new Subject<TokenResponse | null>()

export const login = (tokens: TokenResponse) => {
  persistTokens(tokens)
  loggedIn$.next(tokens)
}

export const logout = () => {
  clearTokens()
  loggedIn$.next(null)
}
