import { flex, margins } from "common/styles"
import { Box } from "components/Box"
import { Icon } from "components/Icon"
import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const InputWrapper = styled(Box)`
  margin-top: 0;
  width: 240px;
  color: ${theme.colors.white};
  font-size: 14px;
  height: 40px;
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.white};
  background: transparent;
  ${flex};
  ${margins};

  ${p =>
    p.isOpen &&
    css`
      border-color: ${theme.colors.primaryGreen};
    `}
  p {
    text-shadow: none !important;
  }
`

export const IconWrapper = styled(Icon)`
  margin-left: auto;
`
