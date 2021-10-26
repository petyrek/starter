import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledToastWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${theme.zIndices.toasts};
`
