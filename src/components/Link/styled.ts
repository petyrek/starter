import styled, { css } from "styled-components/macro"
import { Link } from "react-router-dom"
import { theme } from "theme"

const linkStyle = css`
  text-decoration: none;
  color: ${theme.color.darkgrey};
`

export const StyledLink = styled(Link)`
  ${linkStyle};
`

export const StyledNoLink = styled.div`
  ${linkStyle};
`
