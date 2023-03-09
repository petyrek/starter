import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { theme } from "theme"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.color.darkgrey};
`
