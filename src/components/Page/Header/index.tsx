import React from "react"
import { logout } from "data/auth/rx"
import { StyledHeader } from "./styled"
import { Button } from "components/Button"

export const Header = () => (
  <StyledHeader>
    header
    <Button onClick={logout} text="Logout" />
  </StyledHeader>
)
