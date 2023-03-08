import styled from "styled-components/macro"
import { theme } from "theme"

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: ${theme.color.darkgrey};
  flex-shrink: 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
