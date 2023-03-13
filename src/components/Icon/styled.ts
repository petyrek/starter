import styled from "styled-components/macro"
import { theme } from "theme"

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: ${theme.color.darkgrey};
  flex-shrink: 0;

  svg {
    width: 25px;
    height: 25px;
  }
`
