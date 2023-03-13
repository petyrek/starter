import { Box } from "components/Box"
import { FC } from "react"

type Props = {
  text?: string
}

export const Empty: FC<Props> = ({ text = "no results" }) => (
  <Box p={20}>{text}</Box >
)
