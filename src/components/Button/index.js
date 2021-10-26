import React from "react"
import { StyledButton } from "./styled"
import { Link } from "components/Link"

export const Button = ({ text, to, type = "button", ...p }) => {
  const element = (
    <StyledButton type={type} {...p}>
      {text}
    </StyledButton>
  )

  if (to) return <Link to={to}>{element}</Link>

  return element
}
