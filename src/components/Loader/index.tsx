import { FC } from "react"
import { StyledLoader } from "./styled"

type LoaderProps = {
  fullscreen?: boolean
}

export const Loader: FC<LoaderProps> = ({ fullscreen }) => (
  <StyledLoader fullscreen={fullscreen}>loading</StyledLoader>
)
