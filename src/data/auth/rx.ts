import { Token } from "data/_generated"
import { BehaviorSubject } from "rxjs"
import { getTokensFromStorage, persistTokens, clearTokens } from "./storage"

export const loggedIn$ = new BehaviorSubject<Token | null>(
  getTokensFromStorage(),
)

export const login = (tokens: Token) => {
  persistTokens(tokens)
  loggedIn$.next(tokens)
}

export const logout = () => {
  clearTokens()
  loggedIn$.next(null)
}
