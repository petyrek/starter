import styled, { css } from "styled-components/macro"
import { theme } from "theme"
import { Position } from "./helpers"

type ContextToggleWrapProps = {
  isOpen: boolean
}

export const ContextToggleWrap = styled.div<ContextToggleWrapProps>`
  position: relative;
  cursor: pointer;

  ${p =>
    p.isOpen &&
    css`
      position: relative;
      z-index: ${theme.zIndices.overlayWrapper};
    `};
`

type ContextMenuWrapProps = {
  position: Position
}

export const ContextMenuWrap = styled.div<ContextMenuWrapProps>`
  border: 1px solid black;
  background: #fff;
  position: fixed;
  z-index: ${theme.zIndices.contextMenu};
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid black;

  ${p => p.position};
`
