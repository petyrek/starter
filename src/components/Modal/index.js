import React from "react"
import { Backdrop } from "components/Backdrop"
import ReactDOM from "react-dom"
import { ModalWindow, ModalTitle, ModalBody } from "./styled"
import { Icon } from "components/Icon"
import { Cross } from "icons/Cross"

export const Modal = ({ children, close, title }) =>
  ReactDOM.createPortal(
    <Backdrop onClick={close}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        {title && (
          <ModalTitle>
            {title}
            <Icon icon={Cross} onClick={close} large />
          </ModalTitle>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </Backdrop>,
    document.body,
  )
