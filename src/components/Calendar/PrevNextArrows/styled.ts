import styled, { css } from "styled-components/macro"

export const PrevNextArrowsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
`

export const Title = styled.div`
  margin: 0 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  width: 14rem;
  text-align: center;
  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    `}
`
