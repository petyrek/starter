import { config } from "config"
import { setAccessToken } from "data/auth/storage"
import { logout, getTokens } from "data/auth/rx"
import { rxFetch } from "./fetch"
import { catchError, switchMap, share, throwError } from "rxjs"
import * as R from "ramda"

// will hold refresh observable
let refresh$

const request = method => (url, data) => {
  // get tokens from local storage
  const tokens = getTokens()

  return rxFetch({
    url: config.apiRoot + url,
    headers: {
      "Content-Type": "application/json",
      ...(tokens ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
    },
    data,
    method,
  }).pipe(
    catchError(error => {
      if (R.path(["response", "status"], error) === 401) {
        if (!refresh$) {
          refresh$ = rxFetch({
            url: config.apiRoot + "auth/refresh",
            headers: {
              "Content-Type": "application/json",
            },
            data: { refreshToken: tokens.refreshToken },
            method: "post",
          }).pipe(share())
        }

        return refresh$.pipe(
          switchMap(refreshResponse => {
            setAccessToken(refreshResponse.data)

            return rxFetch({
              url: config.apiRoot + url,
              selector: response => response.json(),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshResponse.data}`,
              },
              data: JSON.stringify(data),
              method,
            })
          }),
        )
      }
    }),
    catchError(error => {
      logout()
      return throwError(error)
    }),
  )
}
export const get = request("get")

export const post = request("post")

export const del = request("delete")

export const put = request("put")
