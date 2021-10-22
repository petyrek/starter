import { BehaviorSubject } from "rxjs"
import {
  getTokens,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from "./storage"

export const loggedIn$ = new BehaviorSubject(getTokens())

export const login = ({ accessToken, refreshToken }) => {
  setAccessToken(accessToken)
  setRefreshToken(refreshToken)
  loggedIn$.next({ accessToken, refreshToken })
}

export const logout = () => {
  clearTokens()
  loggedIn$.next({ accessToken: undefined, refreshToken: undefined })
}
