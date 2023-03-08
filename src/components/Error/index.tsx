import React from "react"
import { StyledError } from "./styled"
import { useOpen } from "hooks/useOpen"

export const Error = ({ error }) => {
  const { isOpen, toggle } = useOpen()

  return (
    <StyledError>
      <div>something went wrong</div>
      <div onClick={toggle}>{isOpen ? "hide" : "show"} more</div>
      {isOpen && <div>{JSON.stringify(error)}</div>}
    </StyledError>
  )
}
