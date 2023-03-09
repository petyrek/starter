import { FC } from "react"
import { StyledInput } from "./styled"

type Props = {
  onChange: (v: string) => void
  value: string
}

export const Textfield: FC<Props> = ({ onChange, value, ...rest }) => (
  <StyledInput
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value}
  />
)
