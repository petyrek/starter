import styled from "styled-components/macro"
import { theme } from "theme"

export const YearWrap = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
`

export const StyledYear = styled.div`
  font-size: 12px;
  background: ${theme.color.darkgrey};
  width: 100px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;

  &:hover {
    background: ${theme.color.border};
  }
`
