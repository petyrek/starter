import styled from "styled-components/macro"
import { theme } from "theme"

export const ModalWindow = styled.div`
  background: ${theme.color.white};
  width: calc(100% - 1.7rem);
  max-width: 40rem;
`

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5rem;
`
export const ModalBody = styled.div`
  padding: 1.5rem;
`
