import { merge, Observable } from "rxjs"
import { debounceTime, throttleTime } from "rxjs/operators"

export const throunceTime =
  (duration: number) =>
  <T>(source: Observable<T>) =>
    merge(
      source.pipe(throttleTime(duration)),
      source.pipe(debounceTime(duration)),
    ).pipe(throttleTime(0, undefined, { leading: true, trailing: false }))
