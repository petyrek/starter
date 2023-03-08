import React from "react"
import { StyledInput } from "./styled"
import { withField } from "hoc/withField"

export const Textfield = withField(({ onChange, value, ...rest }) => (
  <StyledInput
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value || ""}
  />
))
