
import { LabelWrapper, LabelText, LabelError } from "./styled"

export const Label = ({ label, children, error }) => (
  <LabelWrapper>
    {label && <LabelText>{label}</LabelText>}
    {children}
    {error && <LabelError>{error}</LabelError>}
  </LabelWrapper>
)
