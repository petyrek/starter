import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export type StyledButtonProps = {
  secondary?: boolean
  error?: boolean
}

// TODO
const darken = (amount: number, color: string): string => color

const getBackground = (p: StyledButtonProps) => {
  if (p.secondary) return theme.color.secondary
  if (p.error) return theme.color.error

  return theme.color.primary
}

const getColor = (p: StyledButtonProps): string => {
  return "#fff"
}

const getTheme = (p: StyledButtonProps) => {
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
  height: 35px;
  padding: 0 15px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  ${getTheme};
`
