import { css } from "styled-components/macro"

export const rule =
  <T>(
    ruleAlias: keyof T,
    cssRuleName: string = ruleAlias as string,
    unit: string = "",
  ) =>
  (p: T) => {
    const value = p[ruleAlias] as string

    return value
      ? css`
          ${cssRuleName}: ${value}${unit};
        `
      : ""
  }

export type MarginProps = {
  m?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

export const marginRules = css<MarginProps>`
  ${rule("m", "margin", "px")};
  ${rule("mt", "margin-top", "px")};
  ${rule("mb", "margin-bottom", "px")};
  ${rule("ml", "margin-left", "px")};
  ${rule("mr", "margin-right", "px")};
`

export type PaddingProps = {
  p?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
}

export const paddingRules = css<PaddingProps>`
  ${rule("p", "padding", "px")};
  ${rule("pt", "padding-top", "px")};
  ${rule("pb", "padding-bottom", "px")};
  ${rule("pl", "padding-left", "px")};
  ${rule("pr", "padding-right", "px")};
`

export type PositionProps = {
  position?: "absolute" | "relative"
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export const positionRules = css<PositionProps>`
  ${rule("position")};
  ${rule("top", "px")};
  ${rule("bottom", "px")};
  ${rule("left", "px")};
  ${rule("right", "px")};
`

export type DisplayProps = {
  display?: "flex"
  flexDirection?: "column" | "row"
}

export const displayRules = css<DisplayProps>`
  ${rule("display")};
  ${rule("flexDirection", "flex-direction")};
`

export type BorderProps = {
  border?: string
}

export const borderRules = css<BorderProps>`
  ${rule("border")};
`

export type ColorProps = {
  color?: string
  background?: string
}

export const colorRules = css<ColorProps>`
  ${rule("color")};
  ${rule("background")};
`

export type AllStyledProps = MarginProps &
  PaddingProps &
  PositionProps &
  DisplayProps &
  BorderProps &
  ColorProps

export const allStyledRules = css<AllStyledProps>`
  ${marginRules};
  ${paddingRules};
  ${positionRules};
  ${displayRules};
  ${borderRules};
  ${colorRules};
`
