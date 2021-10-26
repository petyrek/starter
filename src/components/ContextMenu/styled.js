import styled from "styled-components/macro"
import { theme } from "theme"

export const ContextMenuWrap = styled.div`
  border-radius: 4px;
  background: ${p =>
    p.tooltip ? `${theme.colors.white}` : `${theme.colors.blue2}`};
  position: fixed;
  z-index: ${theme.zIndices.contextMenu};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${p => (p.tooltip ? "4px" : "8px")} 0;
  ${p => p.pos};
  width: ${p => p.tooltip && "230px"};
  box-shadow: 0px 8px 10px rgba(${theme.rgbColors.black}, 0.14),
    0px 3px 14px rgba(${theme.rgbColors.black}, 0.12),
    0px 5px 5px rgba(${theme.rgbColors.black}, 0.2);

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: rgba(${theme.rgbColors.white}, 0.12);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`
