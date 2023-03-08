
import { Backdrop } from "components/Backdrop"
import { Portal } from "components/Portal"
import { ModalWindow, ModalTitle, ModalBody } from "./styled"
import { Icon } from "components/Icon"
import { Cross } from "icons/Cross"

export const Modal = ({ children, close, title }) => (
  <Portal>
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
    </Backdrop>
  </Portal>
)
