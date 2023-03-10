import { FC } from "react"
import { StyledInput } from "./styled"

type Props = {
  onChange: (v: string) => void
  value: string
  type?: "text" | "number"
}

export const Textfield: FC<Props> = ({ onChange, value, type = "text" }) => (
  <StyledInput
    type={type}
    onChange={e => onChange(e.target.value)}
    value={value}
  />
)
