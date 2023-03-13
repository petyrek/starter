import { OverlayWrapperContent, OverlayWrapperWrap } from "./styled"
import { useScrollLock } from "hooks/useScrollLock"
import { Backdrop } from "components/Backdrop"
import { SideEffect } from "common/types"
import { FC, ReactNode } from "react"

type Props = {
  isOpen: boolean
  close: SideEffect
  children: ReactNode
}

export const OverlayWrapper: FC<Props> = ({
  isOpen,
  close,
  children,
  ...p
}) => {
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
