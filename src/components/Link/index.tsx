import { FC, ReactNode } from "react"
import { StyledLink } from "./styled"

type Props = {
  children: ReactNode
  to: string
}

export const Link: FC<Props> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>
}
