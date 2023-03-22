import { css } from "styled-components/macro"
import * as R from "ramda"

const pxWhenNumber = (v: number | string): string =>
  R.type(v) === "Number" ? `${v}px` : `${v}`

export const rule =
  <T>(
    ruleAlias: keyof T,
    cssRuleName: string = ruleAlias as string,
    unitFn?: (v: string | number) => string,
  ) =>
  (p: T) => {
    const value = p[ruleAlias] as string

    if (!value) return ""

    return `${cssRuleName}: ${unitFn ? unitFn(value) : value};`
  }

export type MarginProps = {
  m?: number | string
  mt?: number | string
  mb?: number | string
  ml?: number | string
  mr?: number | string
}

export const marginRules = css<MarginProps>`
  ${rule("m", "margin", pxWhenNumber)};
  ${rule("mt", "margin-top", pxWhenNumber)};
  ${rule("mb", "margin-bottom", pxWhenNumber)};
  ${rule("ml", "margin-left", pxWhenNumber)};
  ${rule("mr", "margin-right", pxWhenNumber)};
`

export type PaddingProps = {
  p?: number | string
  pt?: number | string
  pb?: number | string
  pl?: number | string
  pr?: number | string
}

export const paddingRules = css<PaddingProps>`
  ${rule("p", "padding", pxWhenNumber)};
  ${rule("pt", "padding-top", pxWhenNumber)};
  ${rule("pb", "padding-bottom", pxWhenNumber)};
  ${rule("pl", "padding-left", pxWhenNumber)};
  ${rule("pr", "padding-right", pxWhenNumber)};
`

export type PositionProps = {
  position?: "absolute" | "relative"
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

export const positionRules = css<PositionProps>`
  ${rule("position")};
  ${rule("top", "top", pxWhenNumber)};
  ${rule("bottom", "bottom", pxWhenNumber)};
  ${rule("left", "left", pxWhenNumber)};
  ${rule("right", "right", pxWhenNumber)};
`

export type DisplayProps = {
  flex?: boolean
  flexDirection?: "column" | "row"
  align?: "center" | "flex-start" | "flex-end"
  gap?: number | string
}

export const displayRules = css<DisplayProps>`
  ${p => p.flex && "display: flex;"}
  ${rule("flexDirection", "flex-direction")};
  ${rule("align", "align-items")};
  ${rule("gap", "gap", pxWhenNumber)};
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

export type SizeProps = {
  w?: number | string
  maxW?: number | string
  minW?: number | string
  h?: number | string
  maxH?: number | string
  minH?: number | string
}

export const sizeRules = css<SizeProps>`
  ${rule("w", "width", pxWhenNumber)};
  ${rule("maxW", "max-width", pxWhenNumber)};
  ${rule("minW", "min-width", pxWhenNumber)};
  ${rule("h", "height", pxWhenNumber)};
  ${rule("maxH", "max-height", pxWhenNumber)};
  ${rule("minH", "min-height", pxWhenNumber)};
`

export type AllStyledProps = MarginProps &
  PaddingProps &
  PositionProps &
  DisplayProps &
  BorderProps &
  ColorProps &
  SizeProps

export const allStyledRules = css<AllStyledProps>`
  ${marginRules};
  ${paddingRules};
  ${positionRules};
  ${displayRules};
  ${borderRules};
  ${colorRules};
  ${sizeRules};
`
