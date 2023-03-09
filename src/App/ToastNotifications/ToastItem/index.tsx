import { FC, useEffect } from "react"
import { StyledToast, StyledText } from "./styled"
import { Cross } from "icons/Cross"
import { Icon } from "components/Icon"
import { Toast } from "data/toasts/types"
import { SideEffect } from "common/types"

type Props = {
  toast: Toast
  closeToast: SideEffect
}

export const ToastItem: FC<Props> = ({ toast, closeToast }) => {
  useEffect(() => {
    const timeout = setTimeout(
      closeToast,
      toast.message.split(" ").length * 1000,
    )

    return () => clearTimeout(timeout)
  }, []) //eslint-disable-line

  return (
    <StyledToast type={toast.type}>
      <StyledText>{toast.message}</StyledText>
      <Icon onClick={closeToast} icon={Cross} />
    </StyledToast>
  )
}
