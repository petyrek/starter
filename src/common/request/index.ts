import { config } from "config"
import { getTokensFromStorage } from "data/auth/storage"
import { logout, login } from "data/auth/rx"
import { rxFetch } from "./fetch"
import { catchError, switchMap, share, throwError, Observable } from "rxjs"
import * as R from "ramda"
import { TokenResponse } from "data/_generated"

// will hold refresh observable
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
        if (tokens && R.path(["response", "status"], error) === 401) {
          if (!refresh$) {
            refresh$ = rxFetch<TokenResponse, TokenResponse>({
              url: config.apiRoot + "auth/refresh",
              headers: {
                "Content-Type": "application/json",
              },
              data: tokens,
              method: "post",
            }).pipe(share())
          }

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
            catchError(error => {
              logout()
              return throwError(error)
            }),
          )
        }

        return throwError(error)
      }),
    )
  }
export const get = request("get")

export const post = request("post")

export const del = request("delete")

export const put = request("put")
