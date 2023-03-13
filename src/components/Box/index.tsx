import { StyledBox, StyledBoxProps } from "./styled"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
} & StyledBoxProps

export const Box: FC<Props> = ({ children, ...p }) => {
  return <StyledBox {...p}>{children}</StyledBox>
}
