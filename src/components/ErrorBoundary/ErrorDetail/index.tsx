import { useOpen } from "hooks/useOpen"
import { FC } from "react"
import { Text } from "components/Text"
import { Button } from "components/Button"
import { Box } from "components/Box"
import { theme } from "theme"

type Props = {
  error: Error
}

export const ErrorDetail: FC<Props> = ({ error }) => {
  const { isOpen, toggle } = useOpen()

  return (
    <Box color={theme.color.error} p={20}>
      <Text>something went wrong</Text>
      <Button onClick={toggle} text={`${isOpen ? "hide" : "show"} more`} />
      {isOpen && <Box border="1px solid red">{JSON.stringify(error)}</Box>}
    </Box>
  )
}
