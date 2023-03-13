import { Text } from "components/Text"
import { FC, ReactNode } from "react"
import { theme } from "theme"
import { LabelWrapper } from "./styled"

type Props = {
  label?: string
  children: ReactNode
  error?: string
}

export const Label: FC<Props> = ({ label, children, error }) => (
  <LabelWrapper>
    {label && <Text>{label}</Text>}
    {children}
    {error && <Text color={theme.color.error}>{error}</Text>}
  </LabelWrapper>
)
