import { margins } from "common/styles"
import styled from "styled-components/macro"
import { theme } from "theme"

export const MonthWrap = styled.div`
  text-align: center;
  margin: 0 auto;
  ${margins};
`

export const Week = styled.div`
  display: flex;
  text-transform: capitalize;
  color: ${theme.colors.white};
  font-size: 12px;

  &:first-child {
    margin-bottom: 4px;
    opacity: 0.63;
  }
  & > * {
    width: calc(100% / 7);
  }
`
