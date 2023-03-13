import styled from "styled-components/macro"
import { theme } from "theme"

export const YearWrap = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: calc(100% / 7);
  }
`

export const StyledYear = styled.div`
  line-height: 50px;
  cursor: pointer;

  &:hover {
    background: ${theme.color.border};
  }
`
