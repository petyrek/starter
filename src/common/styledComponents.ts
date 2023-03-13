import { css } from "styled-components/macro"
import * as R from "ramda"

const px = R.always("px")
const pxWhenNumber = (v: number | string): string =>
  R.type(v) === "Number" ? `${v}px` : `${v}`

export const rule =
  <T>(
    ruleAlias: keyof T,
    cssRuleName: string = ruleAlias as string,
    unitFn: (v: string | number) => string = R.always(""),
  ) =>
  (p: T) => {
    const value = p[ruleAlias] as string

    return value
      ? css`
          ${cssRuleName}: ${unitFn(value)};
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
  ${rule("m", "margin", px)};
  ${rule("mt", "margin-top", px)};
  ${rule("mb", "margin-bottom", px)};
  ${rule("ml", "margin-left", px)};
  ${rule("mr", "margin-right", px)};
`

export type PaddingProps = {
  p?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
}

export const paddingRules = css<PaddingProps>`
  ${rule("p", "padding", px)};
  ${rule("pt", "padding-top", px)};
  ${rule("pb", "padding-bottom", px)};
  ${rule("pl", "padding-left", px)};
  ${rule("pr", "padding-right", px)};
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
  ${rule("top", "top", px)};
  ${rule("bottom", "bottom", px)};
  ${rule("left", "left", px)};
  ${rule("right", "right", px)};
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
