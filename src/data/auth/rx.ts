import { TokenResponse } from "data/_generated"
import { BehaviorSubject } from "rxjs"
import { getTokensFromStorage, persistTokens, clearTokens } from "./storage"

export const loggedIn$ = new BehaviorSubject<TokenResponse | null>(
  getTokensFromStorage(),
)

export const login = (tokens: TokenResponse) => {
  persistTokens(tokens)
  loggedIn$.next(tokens)
}

export const logout = () => {
  clearTokens()
  loggedIn$.next(null)
}
