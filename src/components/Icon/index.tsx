import { SideEffect } from "common/types"
import { FC } from "react"
import { IconWrapper, IconWrapperProps } from "./styled"

type Props = {
  icon: FC
  onClick?: SideEffect
} & IconWrapperProps

export const Icon: FC<Props> = ({ icon: IconComponent, ...p }) => (
  <IconWrapper {...p}>
    <IconComponent />
  </IconWrapper>
)
