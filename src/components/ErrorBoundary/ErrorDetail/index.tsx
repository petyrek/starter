import { StyledError } from "./styled"
import { useOpen } from "hooks/useOpen"
import { FC } from "react"

type Props = {
  error: Error
}

export const ErrorDetail: FC<Props> = ({ error }) => {
  const { isOpen, toggle } = useOpen()

  return (
    <StyledError>
      <div>something went wrong</div>
      <div onClick={toggle}>{isOpen ? "hide" : "show"} more</div>
      {isOpen && <div>{JSON.stringify(error)}</div>}
    </StyledError>
  )
}
