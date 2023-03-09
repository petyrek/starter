import { PartialTokens } from "./types"

export const getTokensFromStorage = (): PartialTokens => ({
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
})

export const setAccessToken = (accessToken: string) =>
  localStorage.setItem("accessToken", accessToken)

export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem("refreshToken", refreshToken)

export const clearTokens = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}
