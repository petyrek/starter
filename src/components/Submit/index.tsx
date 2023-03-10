import { Observable } from "rxjs"
import { ReactNode } from "react"
import { useSubmit } from "hooks/useSubmit"

type ChildrenProps<T> = {
  submit: (callback: (result: T) => void) => void
  isSubmitting: boolean
}

type Props<T> = {
  stream$: Observable<T>
  children: (p: ChildrenProps<T>) => ReactNode
}

export const Submit = <T,>({ stream$, children }: Props<T>) => {
  const { submit, isSubmitting } = useSubmit(stream$)

  return (
    <>
      {children({
        submit,
        isSubmitting,
      })}
    </>
  )
}
