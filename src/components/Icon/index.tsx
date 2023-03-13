import { SideEffect } from "common/types"
import { FC } from "react"
import { IconWrapper } from "./styled"

type Props = {
  icon: FC
  onClick?: SideEffect
  rotate?: string
}

export const Icon: FC<Props> = ({ icon: IconComponent, ...p }) => (
  <IconWrapper {...p}>
    <IconComponent />
  </IconWrapper>
)
