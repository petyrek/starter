import { TokenResponse } from "data/_generated"

const storageKey = "token"

export const getTokensFromStorage = (): TokenResponse | null => {
  const serialized = localStorage.getItem(storageKey)

  if (!serialized) return null

  const decoded: TokenResponse = JSON.parse(serialized)

  return decoded
}

export const persistTokens = (tokens: TokenResponse) =>
  localStorage.setItem(storageKey, JSON.stringify(tokens))

export const clearTokens = () => {
  localStorage.removeItem(storageKey)
}
