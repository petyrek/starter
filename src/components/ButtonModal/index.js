import React from "react"
import { Button } from "components/Button"
import { useOpen } from "hooks/useOpen"

export const ButtonModal = ({ text, title, Modal }) => {
  const { isOpen, open, close } = useOpen()

  return (
    <>
      <Button text={text} onClick={open} />
      {isOpen && <Modal title={title} close={close} />}
    </>
  )
}
