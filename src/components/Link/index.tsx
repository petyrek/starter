import { FC, ReactNode } from "react"
import { StyledLink } from "./styled"

type LinkProps = {
  children: ReactNode
  to: string
}

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>
}
