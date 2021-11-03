import React from "react"
import * as R from "ramda"
import { toastError } from "data/toasts/rx"
import { Loader } from "components/Loader"
import { noop } from "common/functions"
import { useHistory } from "react-router"

export const FormContext = React.createContext()

export const Form = ({
  onSubmit,
  onSuccess = noop,
  redirect = noop,
  initialValues = {},
  schema = R.always({}),
  children,
}) => {
  const [form, setForm] = React.useState({
    values: initialValues,
    errors: R.mapObjIndexed(
      (value, key) => value(initialValues[key]),
      schema(initialValues),
    ),
    touched: {},
    isSubmitting: false,
  })

  const history = useHistory()

  const handleSubmit = e => {
    e?.preventDefault()
    setForm(oldState => ({ ...oldState, isSubmitting: true }))

    onSubmit(form.values).subscribe({
      next: response => {
        onSuccess(response)
        setForm(oldState => ({ ...oldState, isSubmitting: false }))

        if (redirect) {
          history.push(redirect(response))
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

  const currentSchema = schema(form.values)

  const handleOnChange = name => val => {
    setForm(oldState => ({
      ...oldState,
      values: { ...oldState.values, [name]: val },
      touched: { ...oldState.touched, [name]: true },
      errors: { ...oldState.errors, [name]: currentSchema[name](val) },
    }))
  }

  return (
    <FormContext.Provider
      value={{
        form,
        onChange: handleOnChange,
      }}
    >
      <form onSubmit={handleSubmit}>
        {form.isSubmitting && <Loader />}
        {children({
          form,
          onChange: handleOnChange,
          onSubmit: handleSubmit,
          hasErrors: R.values(form.erros).find(x => x),
        })}
      </form>
    </FormContext.Provider>
  )
}
