import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export type StyledButtonProps = {
  secondary?: boolean
  error?: boolean
}

const darken = (hexColor: string, amount: number): string => {
  // Remove the "#" from the hex color string
  hexColor = hexColor.replace("#", "")

  // Convert the hex color string to RGB values
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 4), 16)
  const b = parseInt(hexColor.substring(4, 6), 16)

  // Calculate the new RGB values based on the given amount
  const newR = Math.max(0, Math.round(r * (1 - amount)))
  const newG = Math.max(0, Math.round(g * (1 - amount)))
  const newB = Math.max(0, Math.round(b * (1 - amount)))

  // Convert the new RGB values back to a hex color string
  const newHexColor =
    "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1)

  return newHexColor
}

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
      background: ${darken(bg, 0.05)};
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
