import { Observable, of, switchMap, throwError } from "rxjs"
import { fromFetch } from "rxjs/fetch"

type RxFetchProps<Data> = {
  url: string
  data?: Data
} & RequestInit

export const rxFetch = <Result, Data = {}>({
  url,
  data,
  ...config
}: RxFetchProps<Data>): Observable<Result> =>
  fromFetch(url, {
    body: JSON.stringify(data),
    ...config,
  }).pipe(
    switchMap(response => {
      return Promise.all([response.json(), Promise.resolve(response)])
    }),
    // @ts-expect-error
    switchMap(([json, response]) => {
      if (!response.ok) {
        return throwError({ data: json, response })
      }

      return of(json) as Result
    }),
  )
