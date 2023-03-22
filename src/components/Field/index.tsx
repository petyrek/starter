import { FormState } from "components/Form"
import { Label } from "components/Label"
import { ReactNode } from "react"

type Props<Values> = {
  children: ReactNode
  form: FormState<Values>
  name: keyof Values
  label: string
}

export const Field = <Values,>({
  children,
  form,
  name,
  label,
}: Props<Values>) => {
  const error = form?.errors[name]
  const touched = form?.touched[name]
  const showError = error && touched

  return (
    <Label error={showError ? error : undefined} label={label}>
      {children}
    </Label>
  )
}
