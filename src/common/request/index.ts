import { config } from "config"
import { getTokensFromStorage } from "data/auth/storage"
import { login, logout } from "data/auth/rx"
import { rxFetch } from "./fetch"
import { catchError, switchMap, share, throwError, Observable } from "rxjs"
import * as R from "ramda"
import { TokenResponse } from "data/_generated"

// will hold shared refresh observable, so refresh isn't triggered multiple times
let refresh$: Observable<TokenResponse>

type Method = "get" | "post" | "delete" | "put"

const request =
  (method: Method) =>
  <Result, Data = {}>(url: string, data?: Data): Observable<Result> => {
    const tokens = getTokensFromStorage()

    return rxFetch<Result, Data>({
      url: config.apiRoot + "/" + url,
      headers: {
        "Content-Type": "application/json",
        ...(tokens ? { Authorization: `Bearer ${tokens.accessToken}` } : {}),
      },
      data,
      method,
    }).pipe(
      catchError(error => {
        // we have tokens and its 401, which means token expired
        if (tokens && R.path(["response", "status"], error) === 401) {
          // if refresh observable doesn't exist yet, create one
          if (!refresh$) {
            refresh$ = rxFetch<TokenResponse, TokenResponse>({
              url: config.apiRoot + "/auth/refresh",
              headers: {
                "Content-Type": "application/json",
              },
              data: tokens,
              method: "post",
            }).pipe(share())
          }

          // after refreshing, make the request again with new tokens
          return refresh$.pipe(
            switchMap(refreshResponse => {
              login(refreshResponse)

              return rxFetch<Result, Data>({
                url: config.apiRoot + "/" + url,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${refreshResponse.accessToken}`,
                },
                data,
                method,
              })
            }),
            // refreshing the token failed
            catchError(error => {
              // logout on failing to refresh the token
              logout()
              return throwError(error)
            }),
          )
        }

        // rethrow, we only wanted to catch 401 for expired tokens
        return throwError(error)
      }),
    )
  }

export const get = request("get")

export const post = request("post")

export const del = request("delete")

export const put = request("put")
