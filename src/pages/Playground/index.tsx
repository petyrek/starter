import { Page } from "components/Page"
import { Button } from "components/Button"
import { toastError, toastWarning, toastSuccess } from "data/toasts/rx"
import { DatePicker } from "inputs/DatePicker"
import { Tooltip } from "components/Tooltip"
import { FC, useState } from "react"

export const Playground: FC = () => {
  const [v, setV] = useState<string>()

  return (
    <Page>
      <h1>toasts</h1>
      <Button text="success" onClick={() => toastSuccess("ololol")} />
      <Button secondary text="warning" onClick={() => toastWarning("ololol")} />
      <Button error text="error" onClick={() => toastError("ololol")} />

      <h1>datepicker</h1>
      <DatePicker value={v} onChange={setV} />

      <h1>tooltip</h1>
      <Tooltip content={<span>custom tooltip ex</span>}>
        <div>tooltip example</div>
      </Tooltip>
    </Page>
  )
}
