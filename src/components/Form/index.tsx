import { ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Observable } from "rxjs"
import { toastError } from "data/toasts/rx"
import * as R from "ramda"
import { Loader } from "components/Loader"
import { Validator } from "common/validators"

type Values<T> = { [K in keyof T]: T[K] extends Validator<infer U> ? U : never }
type Errors<T> = { [K in keyof T]: string }
type Touched<T> = { [K in keyof T]: boolean }

export type FormState<Schema> = {
  values: Values<Schema>
  errors: Errors<Schema>
  touched: Touched<Schema>
  isSubmitting: boolean
}

type ChildrenProps<Schema> = {
  form: FormState<Schema>
  onChange: (k: keyof Schema) => (v: Values<Schema>[typeof k]) => void
  hasErrors: boolean
}

type Props<Schema, Result> = {
  schema: Schema
  onSubmit: (values: Values<Schema>) => Observable<Result>
  onSuccess: (result: Result) => void
  redirect?: (result: Result) => string
  initialValues: Values<Schema>
  children: (p: ChildrenProps<Schema>) => ReactNode
}

export const Form = <Schema extends Record<string, Validator<any>>, Result>({
  schema,
  onSubmit,
  onSuccess,
  redirect,
  initialValues,
  children,
}: Props<Schema, Result>) => {
  const [form, setForm] = useState<FormState<Schema>>({
    values: initialValues,
    errors: R.mapObjIndexed(
      (validator, key) => validator(initialValues[key]),
      schema,
    ) as Errors<Schema>,
    touched: R.map(R.always(false), initialValues),
    isSubmitting: false,
  })

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setForm(oldState => ({ ...oldState, isSubmitting: true }))

    onSubmit(form.values).subscribe({
      next: response => {
        onSuccess(response)
        setForm(oldState => ({ ...oldState, isSubmitting: false }))

        if (redirect) {
          navigate(redirect(response))
        }
      },
      error: err => {
        setForm(oldState => ({ ...oldState, isSubmitting: false }))
        toastError(R.pathOr("Unknown error", ["detail"], err))
      },
    })
  }

  const handleOnChange = (name: keyof Schema) => (val: any) => {
    setForm(oldState => ({
      ...oldState,
      values: { ...oldState.values, [name]: val },
      touched: { ...oldState.touched, [name]: true },
      errors: {
        ...oldState.errors,
        [name]: schema[name as keyof typeof schema](val),
      },
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      {form.isSubmitting && <Loader />}
      {children({
        form,
        onChange: handleOnChange,
        hasErrors: !!R.values(form.errors).find(x => x),
      })}
    </form>
  )
}
