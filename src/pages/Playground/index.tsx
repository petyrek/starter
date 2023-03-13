import { Page } from "components/Page"
import { Button } from "components/Button"
import { toastError, toastWarning, toastSuccess } from "data/toasts/rx"
import { DatePicker } from "components/DatePicker"
import { Tooltip } from "components/Tooltip"
import { FC, useState } from "react"
import { Box } from "components/Box"

type Props = {}

export const Playground: FC<Props> = () => {
  const [v, setV] = useState<string>()

  return (
    <Page>
      <h1>toasts</h1>
      <Button text="success" onClick={() => toastSuccess("ololol")} />
      <Button secondary text="warning" onClick={() => toastWarning("ololol")} />
      <Button error text="error" onClick={() => toastError("ololol")} />

      <h1>datepicker</h1>
      <Box border="1px solid red" m={20}>
        <DatePicker value={v} onChange={setV} />
      </Box>

      <h1>tooltip</h1>
      <Box border="1px solid blue">
        <Box border="1px solid red" m={20}>
          <Tooltip content={<span>custom tooltip ex</span>}>
            <div>tooltip example</div>
          </Tooltip>
        </Box>
      </Box>
    </Page>
  )
}
