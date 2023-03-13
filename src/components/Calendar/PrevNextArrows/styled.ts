import styled from "styled-components/macro"
import { theme } from "theme"

export const PrevNextArrowsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Title = styled.div`
  cursor: pointer;
  &:hover {
    background: ${theme.color.border};
  }
`
