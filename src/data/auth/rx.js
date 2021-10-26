import { BehaviorSubject } from "rxjs"
import {
  getTokensFromStorage,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from "./storage"

export const loggedIn$ = new BehaviorSubject(getTokensFromStorage())

export const getTokens = () => loggedIn$.value

export const login = ({ accessToken, refreshToken }) => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
  loggedIn$.next({ accessToken, refreshToken })
}

export const logout = () => {
  clearTokens()
  loggedIn$.next({ accessToken: undefined, refreshToken: undefined })
}
