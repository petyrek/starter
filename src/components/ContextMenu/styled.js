import styled from "styled-components/macro"
import { theme } from "theme"

export const ContextMenuWrap = styled.div`
  border-radius: 4px;
  background: blue;
  position: fixed;
  z-index: ${theme.zIndices.contextMenu};
  overflow-y: auto;
  overflow-x: hidden;
  width: 230px;
  border: 1px solid black;

  ${p => p.position};
`
