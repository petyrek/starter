import dayjs from "dayjs"
import { ContextMenu } from "components/ContextMenu"
import { Calendar } from "components/Calendar"
import { Textfield } from "components/Textfield"
import { FC } from "react"
import { noop } from "common/functions"

type Props = {
  onChange: (v: string) => void
  value?: string
}

export const DatePicker: FC<Props> = ({ value, onChange }) => {
  return (
    <ContextMenu
      toggleElement={({ toggle }) => (
        <Textfield
          onClick={toggle}
          value={dayjs(value).format("DD. MM. YYYY")}
          onChange={noop}
        />
      )}
      menuContent={({ close }) => (
        <Calendar
          onChange={v => {
            onChange(v)
            close()
          }}
          value={value}
        />
      )}
    />
  )
}
