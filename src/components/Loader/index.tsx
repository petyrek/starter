import { FC } from "react"
import { StyledLoader } from "./styled"

type Props = {
  fullscreen?: boolean
}

export const Loader: FC<Props> = ({ fullscreen }) => (
  <StyledLoader fullscreen={fullscreen}>loading</StyledLoader>
)
