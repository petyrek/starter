import React from "react"
import { StyledInput } from "./styled"

export const Textfield = ({ onChange, value, ...rest }) => (
  <StyledInput
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value || ""}
  />
)
