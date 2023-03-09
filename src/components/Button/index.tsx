import { StyledButton, StyledButtonProps } from "./styled"
import { Link } from "components/Link"
import { SideEffect } from "common/types"
import { FC } from "react"

type Props = {
  text: string
  to?: string
  type?: "submit" | "button"
  disabled?: boolean
  onClick?: SideEffect
} & StyledButtonProps

export const Button: FC<Props> = ({ text, to, type = "button", ...p }) => {
  const element = (
    <StyledButton type={type} {...p}>
      {text}
    </StyledButton>
  )

  if (to) return <Link to={to}>{element}</Link>

  return element
}
