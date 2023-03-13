import { SideEffect } from "common/types"
import { FC } from "react"
import { StyledInput } from "./styled"

type Props = {
  onChange: (v: string) => void
  onClick?: SideEffect
  value: string
  type?: "text" | "number"
}

export const Textfield: FC<Props> = ({
  onChange,
  onClick,
  value,
  type = "text",
}) => (
  <StyledInput
    onChange={e => onChange(e.target.value)}
    onClick={onClick}
    value={value}
    type={type}
  />
)
