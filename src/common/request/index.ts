import { config } from "config"
import { setAccessToken, getTokensFromStorage } from "data/auth/storage"
import { logout } from "data/auth/rx"
import { rxFetch } from "./fetch"
import { catchError, switchMap, share, throwError, Observable } from "rxjs"
import * as R from "ramda"

type RefreshData = { refreshToken: string | null }

type RefreshResponse = {
  data: string
}

// will hold refresh observable
let refresh$: Observable<RefreshResponse>

type Method = "get" | "post" | "delete" | "put"

const request =
  (method: Method) =>
  <Result, Data = {}>(url: string, data?: Data): Observable<Result> => {
    // get tokens from local storage
    const tokens = getTokensFromStorage()

    return rxFetch<Result, Data>({
      url: config.apiRoot + url,
      headers: {
        "Content-Type": "application/json",
        ...(tokens ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
      },
      data,
      method,
    }).pipe(
      // @ts-expect-error TODO - why is it not typesafe
      catchError(error => {
        if (R.path(["response", "status"], error) === 401) {
          if (!refresh$) {
            refresh$ = rxFetch<RefreshResponse, RefreshData>({
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
                // @ts-expect-error TODO - why is it not typesafe
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

        logout()
        return throwError(error)
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
