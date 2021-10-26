import { margins } from "common/styles"
import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const OverlayWrapperWrap = styled.div`
  position: relative;
  cursor: pointer;
  ${margins};
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${theme.zIndices.overlay};
  background: ${p =>
    p.transparent ? "transparent" : `rgba(${theme.rgbColors.black}, 0.2)`};
`

export const OverlayWrapperContent = styled.div`
  ${p =>
    p.isOpen &&
    css`
      position: relative;
      z-index: ${theme.zIndices.overlayWrapper};
    `};
`
