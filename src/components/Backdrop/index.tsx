import { SideEffect } from "common/types"
import { FC, ReactNode } from "react"
import { StyledBackdrop } from "./styled"

type Props = {
  onClick: SideEffect
  children?: ReactNode
}

export const Backdrop: FC<Props> = p => <StyledBackdrop {...p} />
