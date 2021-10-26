import React from "react"
import { FormContext } from "components/Form"
import { Label } from "components/Label"

export const withField = Component => props => {
  const { form, onChange } = React.useContext(FormContext)

  const error = form.errors[props.name]
  const touched = form.touched[props.name]
  const showError = error && touched

  return (
    <Label error={showError && error} label={props.label}>
      <Component
        {...props}
        value={form.values[props.name]}
        onChange={v => {
          props.onChange?.(v)
          onChange(props.name)(v)
        }}
      />
    </Label>
  )
}
