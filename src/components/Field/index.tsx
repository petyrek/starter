import { FormState } from "components/Form"
import { Label } from "components/Label"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  form: FormState
  name: string
  label: string
}

export const Field: FC<Props> = ({ children, form, name, label }) => {
  const error = form?.errors[name]
  const touched = form?.touched[name]
  const showError = error && touched

  return (
    <Label error={showError ? error : undefined} label={label}>
      {children}
    </Label>
  )
}
