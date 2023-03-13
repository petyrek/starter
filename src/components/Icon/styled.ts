import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export type IconWrapperProps = {
  rotate?: number
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: ${theme.color.darkgrey};
  flex-shrink: 0;

  ${p =>
    p.rotate &&
    css`
      transform: rotate(${p.rotate}deg);
    `}

  svg {
    width: 25px;
    height: 25px;
  }
`
