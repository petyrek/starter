import { FC } from "react"
import { StyledEmpty } from "./styled"

type Props = {
  text?: string
}

export const Empty: FC<Props> = ({ text = "no results" }) => (
  <StyledEmpty>{text}</StyledEmpty>
)
