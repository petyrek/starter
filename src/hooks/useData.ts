import { useEffect, useState } from "react"
import { Observable } from "rxjs"

export const useData = <T>(stream$: Observable<T>, refetchParams = []) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState()

  const refetch = () => {
    stream$.subscribe({
      next: setData,
      error: setError,
    })
  }

  useEffect(() => {
    refetch()
  }, refetchParams) // eslint-disable-line

  return { data, error, setData, refetch }
}
