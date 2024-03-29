import { AllStyledProps, allStyledRules } from "common/styledComponents"
import styled from "styled-components/macro"

type OtherProps = {}

export type StyledBoxProps = AllStyledProps & OtherProps

export const StyledBox = styled.div<StyledBoxProps>`
  ${allStyledRules};
`
