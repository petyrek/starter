import { fonts } from "common/styles"
import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const PrevNextArrowsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
  padding: 0 10px;
`

export const Title = styled.div`
  margin: 0 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  width: 14rem;
  text-align: center;
  color: ${theme.colors.white};
  border-radius: 8px;
  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${theme.colors.blue4};
      }
    `};
  ${fonts};
`
