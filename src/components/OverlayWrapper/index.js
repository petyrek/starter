import React from "react"
import { OverlayWrapperContent, OverlayWrapperWrap } from "./styled"
import { useScrollLock } from "hooks/useScrollLock"
import { Backdrop } from "components/Backdrop"

export const OverlayWrapper = ({ isOpen, close, children, ...p }) => {
  useScrollLock(isOpen)

  return (
    <OverlayWrapperWrap {...p}>
      {isOpen && <Backdrop onClick={close} />}
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
