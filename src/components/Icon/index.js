import React from "react"
import { IconWrapper } from "./styled"

export const Icon = ({ icon: IconComponent, ...p }) => (
  <IconWrapper {...p}>
    <IconComponent />
  </IconWrapper>
)
