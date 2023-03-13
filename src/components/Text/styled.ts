import { AllStyledProps, allStyledRules } from "common/styledComponents"
import styled from "styled-components/macro"

type OtherProps = {}

export type StyledTextProps = AllStyledProps & OtherProps

export const StyledText = styled.p<StyledTextProps>`
  ${allStyledRules};
`
