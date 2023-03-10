import { ContextMenu } from "components/ContextMenu"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { FC, ReactNode } from "react"
import { TooltipWrap, StyledTooltip } from "./styled"

type TooltipProps = {
  content: ReactNode
  children: ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ content, children }) => {
  const { isOpen, open, close } = useOpen(false)

  return (
    <OverlayWrapper isOpen={isOpen} close={close}>
      <TooltipWrap onMouseOver={open} onMouseOut={close}>
        {children}
        <ContextMenu isOpen={isOpen}>
          <StyledTooltip>{content}</StyledTooltip>
        </ContextMenu>
      </TooltipWrap>
    </OverlayWrapper>
  )
}
