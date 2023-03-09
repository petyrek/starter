import { switchMap, throwError } from "rxjs"
import { fromFetch } from "rxjs/fetch"

type RxFetch = {
  url: string
  data: Object
} & RequestInit

export const rxFetch = ({ url, data, ...config }: RxFetch) =>
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
