import { Button } from "components/Button"
import { Modal } from "components/Modal"
import { useOpen } from "hooks/useOpen"
import { FC, ReactNode } from "react"

type Props = {
  text: string
  title: string
  modalContent: ReactNode
}

export const ButtonModal: FC<Props> = ({ text, title, modalContent }) => {
  const { isOpen, open, close } = useOpen()

  return (
    <>
      <Button text={text} onClick={open} />
      {isOpen && (
        <Modal title={title} close={close}>
          {modalContent}
        </Modal>
      )}
    </>
  )
}
