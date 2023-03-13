import { FC, ReactNode } from "react"
import { LabelWrapper, LabelText, LabelError } from "./styled"

type Props = {
  label?: string
  children: ReactNode
  error?: string
}

export const Label: FC<Props> = ({ label, children, error }) => (
  <LabelWrapper>
    {label && <LabelText>{label}</LabelText>}
    {children}
    {error && <LabelError>{error}</LabelError>}
  </LabelWrapper>
)
