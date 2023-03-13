import styled, { css } from "styled-components/macro"
import { theme } from "theme"

type StyledLoaderProps = {
  fullscreen?: boolean
}

export const StyledLoader = styled.div<StyledLoaderProps>`
  background: ${theme.color.backdrop};
  padding: 20px;
  color: white;

  ${p =>
    p.fullscreen &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `};
`
