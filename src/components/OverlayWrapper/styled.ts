import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const OverlayWrapperWrap = styled.div`
  position: relative;
  cursor: pointer;
`

type OverlayWrapperContentProps = {
  isOpen: boolean
}

export const OverlayWrapperContent = styled.div<OverlayWrapperContentProps>`
  ${p =>
    p.isOpen &&
    css`
      position: relative;
      z-index: ${theme.zIndices.overlayWrapper};
    `};
`
