import styled from "styled-components/macro"
import { theme } from "theme"
import { Position } from "./helpers"

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
  width: 230px;
  border: 1px solid black;

  ${p => p.position};
`
