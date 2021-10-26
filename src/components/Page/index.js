import React from "react"
import { StyledPage } from "./styled"
import { Header } from "./Header"

export const Page = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
  </StyledPage>
)
