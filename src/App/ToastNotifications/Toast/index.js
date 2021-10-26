import React, { useEffect } from "react"
import { StyledToast, StyledText } from "./styled"
import { Cross } from "icons/Cross"
import { Icon } from "components/Icon"

export const Toast = ({ message, type, closeToast }) => {
  useEffect(() => {
    const timeout = setTimeout(closeToast, message.split(" ").length * 1000)

    return () => clearTimeout(timeout)
  }, []) //eslint-disable-line

  return (
    <StyledToast type={type}>
      <StyledText>{message}</StyledText>
      <Icon onClick={closeToast} icon={Cross} />
    </StyledToast>
  )
}
