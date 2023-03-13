import styled from "styled-components/macro"

export const MonthWrap = styled.div`
  text-align: center;
`

export const Week = styled.div`
  display: flex;
  text-transform: capitalize;

  &:first-child {
    margin-bottom: 5px;
  }
  & > * {
    width: calc(100% / 7);
  }
`
