import { ContextMenu } from "components/ContextMenu"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { TooltipWrap, StyledTooltip } from "./styled"

export const Tooltip = ({ content, children }) => {
  const { isOpen, open, close } = useOpen()

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
