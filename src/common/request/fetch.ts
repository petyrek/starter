import { Observable, switchMap, throwError } from "rxjs"
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
      if (response.ok) {
        // OK return data
        return response.json()
      }

      return throwError(() => new Error())
    }),
  )
