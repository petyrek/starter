import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const OverlayWrapperWrap = styled.div`
  position: relative;
  cursor: pointer;
`

export const OverlayWrapperContent = styled.div`
  ${p =>
    p.isOpen &&
    css`
      position: relative;
      z-index: ${theme.zIndices.overlayWrapper};
    `};
`
