import styled from "styled-components/macro"
import { theme } from "theme"

export const DecadeWrap = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: calc(100% / 3);
  }
`

export const StyledDecade = styled.div`
  line-height: 50px;
  cursor: pointer;

  &:hover {
    background: ${theme.color.border};
  }
`
