import { SideEffect } from "common/types"
import { FC } from "react"
import { IconWrapper } from "./styled"

type IconProps = {
  icon: FC
  onClick?: SideEffect
  rotate?: string
}

export const Icon: FC<IconProps> = ({ icon: IconComponent, ...p }) => (
  <IconWrapper {...p}>
    <IconComponent />
  </IconWrapper>
)
