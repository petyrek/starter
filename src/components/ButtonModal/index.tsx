import { SideEffect } from "common/types"
import { Button } from "components/Button"
import { Modal } from "components/Modal"
import { useOpen } from "hooks/useOpen"
import { FC, ReactNode } from "react"

type RenderModalProps = {
  close: SideEffect
}

type Props = {
  text: string
  title: string
  renderModal: (p: RenderModalProps) => ReactNode
}

export const ButtonModal: FC<Props> = ({ text, title, renderModal }) => {
  const { isOpen, open, close } = useOpen()

  return (
    <>
      <Button text={text} onClick={open} />
      {isOpen && (
        <Modal title={title} close={close}>
          {renderModal({ close })}
        </Modal>
      )}
    </>
  )
}
