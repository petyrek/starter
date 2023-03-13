import styled from "styled-components/macro"

export const MonthWrap = styled.div`
  text-align: center;
`

export const Week = styled.div`
  display: flex;
  text-transform: capitalize;

  & > * {
    width: calc(100% / 7);
  }
`
