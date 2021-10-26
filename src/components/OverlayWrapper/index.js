import React from "react"
import { Overlay, OverlayWrapperContent, OverlayWrapperWrap } from "./styled"
import { useScrollLock } from "hooks/useScrollLock"

export const OverlayWrapper = ({
  isOpen,
  close,
  children,
  transparent,

  ...p
}) => {
  useScrollLock(isOpen)
  return (
    <OverlayWrapperWrap {...p}>
      {isOpen && <Overlay onClick={close} transparent={transparent} />}
      <OverlayWrapperContent
        isOpen={isOpen}
        className="overlay-wrapper-content"
        {...p}
      >
        {children}
      </OverlayWrapperContent>
    </OverlayWrapperWrap>
  )
}
