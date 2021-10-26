import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: 0 0.4rem;

  ${theme.mq.desktop} {
    padding: 0 2rem;
    > * {
      flex: 1 1 0;
    }
  }
`
export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.primary};
`
