
import { StyledLink, StyledNoLink } from "./styled"

export const Link = ({ children, ...props }) => {
  const Element = props.to ? StyledLink : StyledNoLink

  return <Element {...props}>{children}</Element>
}
