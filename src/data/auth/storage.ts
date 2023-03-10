import { Token } from "data/_generated"

const storageKey = "token"

export const getTokensFromStorage = (): Token | null => {
  const serialized = localStorage.getItem(storageKey)

  if (!serialized) return null

  const decoded: Token = JSON.parse(serialized)

  return decoded
}

export const persistTokens = (tokens: Token) =>
  localStorage.setItem(storageKey, JSON.stringify(tokens))

export const clearTokens = () => {
  localStorage.removeItem(storageKey)
}
