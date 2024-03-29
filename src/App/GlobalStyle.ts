import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { theme } from "theme"

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-size: 16px;
    margin: 0;
    font-family: sans-serif;
    color: ${theme.color.darkgrey}
  }
  * {
    box-sizing: border-box;
  }
`
