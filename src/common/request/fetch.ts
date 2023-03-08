import { switchMap, throwError } from "rxjs"
import { fromFetch } from "rxjs/fetch"

// create observable from a promise
// use axios, which transforms responses in a nice way
export const rxFetch = ({ url, data, ...config }) =>
  fromFetch(url, {
    ...config,
    body: JSON.stringify(data),
  }).pipe(
    switchMap(response => {
      if (response.ok) {
        // OK return data
        return response.json()
      }

      return throwError()
    }),
  )
