import { Observable } from "rxjs"
import { ReactNode } from "react"
import { useSubmit } from "hooks/useSubmit"

type ChildrenProps<T> = {
  submit: (callback: (result: T) => void) => void
  isSubmitting: boolean
}

type Props<T> = {
  getStream: () => Observable<T>
  children: (p: ChildrenProps<T>) => ReactNode
}

export const Submit = <T,>({ getStream, children }: Props<T>) => {
  const { submit, isSubmitting } = useSubmit(getStream)

  return (
    <>
      {children({
        submit,
        isSubmitting,
      })}
    </>
  )
}
