import * as R from "ramda"
import { toastError } from "data/toasts/rx"
import { Loader } from "components/Loader"
import { noop } from "common/functions"
import { useNavigate } from "react-router"
import { ReactNode, useState } from "react"
import { Observable } from "rxjs"
import { Validator } from "validators"

type Schema = Record<string, Validator<any>>
type Errors = Record<string, string>
type Touched = Record<string, boolean>

export type FormState<Values> = {
  values: Values
  errors: Errors
  touched: Touched
  isSubmitting: boolean
}

type ChildrenProps<Values> = {
  form: FormState<Values>
  onChange: (k: keyof Values) => (v: any) => void
  hasErrors: boolean
}

type Props<Values, Result> = {
  schema: Schema
  onSubmit: (values: Values) => Observable<Result>
  onSuccess: (result: Result) => void
  redirect?: (result: Result) => string
  initialValues: Values
  children: (p: ChildrenProps<Values>) => ReactNode
}

export const Form = <Values, Result>({
  schema,
  onSubmit,
  onSuccess = noop,
  redirect,
  initialValues = {} as Values,
  children,
}: Props<Values, Result>) => {
  const [form, setForm] = useState<FormState<Values>>({
    values: initialValues,
    errors: R.mapObjIndexed(
      (value, key) => value(initialValues[key as keyof typeof initialValues]),
      schema,
    ),
    touched: {},
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
        toastError(
          R.pathOr("Unknown error", ["response", "data", "message"], err),
        )
      },
    })
  }

  const handleOnChange = (name: keyof Values) => (val: any) => {
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
