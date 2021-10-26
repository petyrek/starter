import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledInput = styled.input`
  background: none;
  color: ${theme.color.darkgrey};
  font-size: 1.6rem;
  height: 4rem;
  border: none;
  padding: 0 1rem;
  width: 100%;
  border-bottom: 0.1rem solid ${theme.color.lightgrey};
  border-radius: 0rem;
  -webkit-border-radius: 0rem;
`
