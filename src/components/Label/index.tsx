import { FC, ReactNode } from "react"
import { LabelWrapper, LabelText, LabelError } from "./styled"

type LabelProps = {
  label?: string
  children: ReactNode
  error?: string
}

export const Label: FC<LabelProps> = ({ label, children, error }) => (
  <LabelWrapper>
    {label && <LabelText>{label}</LabelText>}
    {children}
    {error && <LabelError>{error}</LabelError>}
  </LabelWrapper>
)
