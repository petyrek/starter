import React from "react"
import { LabelWrapper, LabelText, LabelError } from "./styled"
import { FormContext } from "components/Form"

export const Label = ({ label, children, name }) => {
  const form = React.useContext(FormContext)

  const error = form.errors[name]
  const touched = form.touched[name]
  const showError = error && touched

  return (
    <LabelWrapper>
      <LabelText>{label}</LabelText>
      {children}
      {showError && <LabelError>{error}</LabelError>}
    </LabelWrapper>
  )
}
