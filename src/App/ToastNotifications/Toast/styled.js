import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { toastTypes } from "data/toasts/toastTypes"

export const StyledToast = styled.div`
  margin: 0.8rem;
  display: flex;
  justify-content: space-between;
  background: ${theme.color.smoke};
  border-radius: 0.5rem;

  ${p =>
    p.type === toastTypes.success &&
    css`
      background: ${theme.color.success};
    `}
  ${p =>
    p.type === toastTypes.warning &&
    css`
      background: ${theme.color.warning};
    `}
    ${p =>
    p.type === toastTypes.error &&
    css`
      background: ${theme.color.error};
    `};
`

export const StyledText = styled.p`
  font-weight: 300;
  margin: 0;
  padding: 0.8rem 0.8rem 0.8rem 2.5rem;
`
