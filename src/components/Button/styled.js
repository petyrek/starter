import styled, { css } from "styled-components/macro"
import { theme } from "theme"

// TODO
const darken = color => color

const getBackground = p => {
  if (p.secondary) return theme.color.secondary
  if (p.error) return theme.color.error

  return theme.color.primary
}

const getColor = p => {
  return "#fff"
}

const getTheme = p => {
  const bg = getBackground(p)

  return css`
    background: ${bg};
    color: ${getColor(p)};

    &:hover {
      background: ${darken(0.05, bg)};
    }
  `
}

export const StyledButton = styled.button`
  height: 3.5rem;
  padding: 0 1.5rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  ${getTheme};
`
