import { StyledPage } from "./styled"
import { Header } from "./Header"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Page: FC<Props> = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
  </StyledPage>
)
