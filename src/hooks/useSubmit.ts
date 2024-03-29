import { toastError } from "data/toasts/rx"
import { useState } from "react"
import { Observable } from "rxjs"

export const useSubmit = <T>(getStream: () => Observable<T>) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const submit = (callback: (result: T) => void) => {
    setIsSubmitting(true)
    getStream().subscribe({
      next: (result: T) => {
        callback(result)
        setIsSubmitting(false)
      },
      error: () => {
        toastError("submit failed")
        setIsSubmitting(false)
      },
    })
  }

  return { isSubmitting, submit }
}
