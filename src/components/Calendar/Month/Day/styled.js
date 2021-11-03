import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const DayWrap = styled.div`
  font-size: 1.2rem;
  color: #333;
  height: 3.2rem;
  line-height: 2.8rem;
  cursor: pointer;

  &:hover {
    background: #ffe8dc;
  }

  ${p =>
    p.outside &&
    css`
      color: #999;
    `};

  ${p =>
    p.today &&
    css`
      background: ${theme.color.lightgrey};

      &:hover {
        background: #ffe8dc;
      }
    `};

  ${p =>
    p.active &&
    css`
      background: ${theme.color.primary}
      color: #fff;
      &:hover {
        background: ${theme.color.primary}
        color: #fff;
      }
    `};

  ${p =>
    p.blocked &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};
`
