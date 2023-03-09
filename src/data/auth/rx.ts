import { BehaviorSubject } from "rxjs"
import {
  getTokensFromStorage,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from "./storage"
import { PartialTokens, Tokens } from "./types"

export const loggedIn$ = new BehaviorSubject<PartialTokens>(
  getTokensFromStorage(),
)

export const login = ({ accessToken, refreshToken }: Tokens) => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
  loggedIn$.next({ accessToken, refreshToken })
}

export const logout = () => {
  clearTokens()
  loggedIn$.next({ accessToken: null, refreshToken: null })
}
