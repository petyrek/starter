import { Backdrop } from "components/Backdrop"
import { Portal } from "components/Portal"
import { ModalWindow, ModalTitle, ModalBody } from "./styled"
import { Icon } from "components/Icon"
import { Cross } from "icons/Cross"
import { FC, ReactNode } from "react"
import { SideEffect } from "common/types"

export type Props = {
  children: ReactNode
  close: SideEffect
  title: string
}

export const Modal: FC<Props> = ({ children, close, title }) => (
  <Portal>
    <Backdrop onClick={close}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        {title && (
          <ModalTitle>
            {title}
            <Icon icon={Cross} onClick={close} />
          </ModalTitle>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </Backdrop>
  </Portal>
)
