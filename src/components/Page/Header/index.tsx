import { logout } from "data/auth/rx"
import { StyledHeader } from "./styled"
import { Button } from "components/Button"
import { FC } from "react"

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => (
  <StyledHeader>
    header
    <Button onClick={logout} text="Logout" />
  </StyledHeader>
)
