import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { toastTypes } from "data/toasts/toastTypes"

export const StyledToast = styled.div`
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
