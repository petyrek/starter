import styled, { css } from "styled-components/macro"

export const StyledLoader = styled.div`
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
