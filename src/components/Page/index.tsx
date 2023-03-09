import { StyledPage } from "./styled"
import { Header } from "./Header"
import { FC, ReactNode } from "react"

type PageProps = {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
  </StyledPage>
)
