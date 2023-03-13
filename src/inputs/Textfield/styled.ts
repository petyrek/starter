import styled from "styled-components/macro"
import { theme } from "theme"

export const StyledInput = styled.input`
  background: white;
  color: ${theme.color.darkgrey};
  font-size: 16px;
  height: 40px;
  border: none;
  padding: 0 10px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.border};
  border-radius: 0;
  -webkit-border-radius: 0;
`
