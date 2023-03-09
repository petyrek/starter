import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { ToastType, toastTypes } from "data/toasts/types"

type StyledToastProps = {
  type: ToastType
}

export const StyledToast = styled.div<StyledToastProps>`
  display: flex;
  justify-content: space-between;

  ${p =>
    p.type === toastTypes.success &&
    css`
      background: ${theme.color.success};
    `};

  ${p =>
    p.type === toastTypes.warning &&
    css`
      background: ${theme.color.warning};
    `};

  ${p =>
    p.type === toastTypes.error &&
    css`
      background: ${theme.color.error};
    `};
`

export const StyledText = styled.p``
