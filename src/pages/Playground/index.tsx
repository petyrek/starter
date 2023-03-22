import { Page } from "components/Page"
import { Button } from "components/Button"
import { toastError, toastWarning, toastSuccess } from "data/toasts/rx"
import { DatePicker } from "components/DatePicker"
import { FC, useState } from "react"
import { Box } from "components/Box"
import { ButtonModal } from "components/ButtonModal"
import { Calendar } from "components/Calendar"

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

      <Box border="1px solid red" m={20} mt={30}>
        <Calendar value={v} onChange={setV} />
      </Box>

      <ButtonModal
        text="create"
        title="create ingredient"
        renderModal={() => (
          <ul>
            <li>dshjksdhjksdhjk</li>
            <li>dshjksdhjksdhjk</li>
          </ul>
        )}
      />
      <ul>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
        <li>dshjksdhjksdhjk</li>
      </ul>
    </Page>
  )
}
