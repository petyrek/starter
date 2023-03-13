import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const PrevNextArrowsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`

export const Title = styled.div`
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 2px;
  width: 14px;
  text-align: center;

  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${theme.color.border};
      }
    `}
`
