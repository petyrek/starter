import styled from "styled-components/macro"

export const StyledTooltip = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: none;
`


export const TooltipWrap = styled.div`
  position: relative;

  &:hover + ${StyledTooltip} {
    display: inline-block;
  }
`