import { logout } from "data/auth/rx"
import { StyledHeader } from "./styled"
import { Button } from "components/Button"
import { FC } from "react"
import { urls } from "pages/urls"
import { Link } from "components/Link"

type Props = {}

export const Header: FC<Props> = () => (
  <StyledHeader>
    <ul>
      <li>
        <Link to={urls.meals.url}>meals</Link>
      </li>
      <li>
        <Link to={urls.ingredients.url}>ingredients</Link>
      </li>
    </ul>
    <Button onClick={logout} text="Logout" />
  </StyledHeader>
)
