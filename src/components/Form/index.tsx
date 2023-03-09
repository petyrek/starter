import * as R from "ramda"
import { toastError } from "data/toasts/rx"
import { Loader } from "components/Loader"
import { noop } from "common/functions"
import { useNavigate } from "react-router"
import { FC, ReactNode, useState } from "react"
import { Observable } from "rxjs"
import { Validator } from "validators"

// TODO - derive types from Schema
type Schema = Record<string, Validator<any>>
type Values = Record<string, any>
type ResultValues = Record<string, any>
type Errors = Record<string, string>
type Touched = Record<string, boolean>

export type FormOnChange = (k: string) => (v: any) => void

export type FormState = {
  values: Values
  errors: Errors
  touched: Touched
  isSubmitting: boolean
}

type ChildrenProps = {
  form: FormState
  onChange: FormOnChange
  hasErrors: boolean
}

type Props = {
  schema: Schema
  onSubmit: (values: Values) => Observable<ResultValues>
  onSuccess: (result: ResultValues) => void
  redirect?: (result: ResultValues) => string
  initialValues?: Values
  children: (p: ChildrenProps) => ReactNode
}

export const Form: FC<Props> = ({
  schema,
  onSubmit,
  onSuccess = noop,
  redirect,
  initialValues = {},
  children,
}) => {
  const [form, setForm] = useState<FormState>({
    values: initialValues,
    errors: R.mapObjIndexed((value, key) => value(initialValues[key]), schema),
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

  const handleOnChange = (name: string) => (val: any) => {
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
