import styled, { css } from "styled-components/macro"
import { theme } from "theme"

type DayWrapProps = {
  outside: boolean
  today: boolean
  active: boolean
  blocked?: boolean
}

export const DayWrap = styled.div<DayWrapProps>`
  font-size: 12px;
  color: ${theme.color.darkgrey};
  height: 32px;
  line-height: px;
  cursor: pointer;

  &:hover {
    background: ${theme.color.error};
  }

  ${p =>
    p.outside &&
    css`
      color: ${theme.color.lightGrey};
    `};

  ${p =>
    p.today &&
    css`
      background: ${theme.color.border};

      &:hover {
        background: ${theme.color.error};
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
