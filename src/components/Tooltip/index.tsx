import { ContextMenu } from "components/ContextMenu"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { FC, ReactNode } from "react"
import { TooltipWrap, StyledTooltip } from "./styled"

type Prop = {
  content: ReactNode
  children: ReactNode
}

export const Tooltip: FC<Prop> = ({ content, children }) => {
  return (
    <>
      <TooltipWrap>{children}</TooltipWrap>
      <StyledTooltip>{content}</StyledTooltip>
    </>
  )
}
