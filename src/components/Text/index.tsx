import { StyledText, StyledTextProps } from "./styled"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
} & StyledTextProps

export const Text: FC<Props> = ({ children, ...p }) => {
  return <StyledText {...p}>{children}</StyledText>
}
