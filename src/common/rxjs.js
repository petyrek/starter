import { merge } from "rxjs"
import { debounceTime, throttleTime } from "rxjs/operators"

export const throunceTime = duration => source =>
  merge(
    source.pipe(throttleTime(duration)),
    source.pipe(debounceTime(duration)),
  ).pipe(throttleTime(0, undefined, { leading: true, trailing: false }))
