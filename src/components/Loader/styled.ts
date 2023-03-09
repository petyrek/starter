import styled, { css } from "styled-components/macro"

type StyledLoaderProps = {
  fullscreen?: boolean
}

export const StyledLoader = styled.div<StyledLoaderProps>`
  background: rgba(0, 0, 0, 0.5);
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
