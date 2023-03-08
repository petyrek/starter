import { Subject } from "rxjs"
import {
  getTokensFromStorage,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from "./storage"

export const loggedIn$ = new Subject(getTokensFromStorage())

export const login = ({ accessToken, refreshToken }) => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
  loggedIn$.next({ accessToken, refreshToken })
}

export const logout = () => {
  clearTokens()
  loggedIn$.next({ accessToken: undefined, refreshToken: undefined })
}
