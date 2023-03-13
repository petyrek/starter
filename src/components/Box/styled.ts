import styled, {css} from "styled-components/macro"

type MarginProps = {
  m?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

type PaddingProps = {
  p?: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
}

type PositionProps = {
  position?: "absolute" | "relative"
  top?: number
  bottom?: number
  left?: number
  right?: number
}

type OtherProps = {
  display?: "flex"
  flex?: boolean,
  flexDirection?: "column" | "row" 
  border?: string
}

export type StyledBoxProps = MarginProps & PaddingProps & PositionProps & OtherProps

const rule = (ruleAlias: keyof StyledBoxProps, cssRuleName: string = ruleAlias as string, unit: string = "") => (p: StyledBoxProps) => {
  const value = p[ruleAlias] as string

  return value ? css`
    ${cssRuleName}: ${value}${unit};
  ` : ""
}

export const StyledBox = styled.div<StyledBoxProps>`
  ${rule("m", "margin", "px")};
  ${rule("mt", "margin-top", "px")};
  ${rule("mb", "margin-bottom", "px")};
  ${rule("ml", "margin-left", "px")};
  ${rule("mr", "margin-right", "px")};

  ${rule("p", "padding", "px")};
  ${rule("pt", "padding-top", "px")};
  ${rule("pb", "padding-bottom", "px")};
  ${rule("pl", "padding-left", "px")};
  ${rule("pr", "padding-right", "px")};

  ${rule("flex")};
  ${rule("flexDirection", "flex-direction")};

  ${rule("position")};
  ${rule("top", "px")};
  ${rule("bottom", "px")};
  ${rule("left", "px")};
  ${rule("right", "px")};

  ${rule("border")};
`
