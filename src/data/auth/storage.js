export const getTokens = () => ({
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
})

export const setAccessToken = accessToken =>
  localStorage.setItem("accessToken", accessToken)

export const setRefreshToken = refreshToken =>
  localStorage.setItem("refreshToken", refreshToken)

export const clearTokens = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}
