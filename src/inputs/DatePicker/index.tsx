import dayjs from "dayjs"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { ContextMenu } from "components/ContextMenu"
import { Calendar } from "components/Calendar"
import { Textfield } from "inputs/Textfield"
import { FC } from "react"
import { noop } from "common/functions"

type Props = {
  onChange: (v: string) => void
  value?: string
}

export const DatePicker: FC<Props> = ({ value, onChange }) => {
  const { isOpen, toggle, close } = useOpen()

  return (
    <OverlayWrapper isOpen={isOpen} close={close}>
      <div onClick={toggle}>
        <Textfield
          value={dayjs(value).format("DD. MM. YYYY")}
          onChange={noop}
        />
      </div>
      <ContextMenu isOpen={isOpen}>
        <Calendar
          onChange={v => {
            onChange(v)
            close()
          }}
          value={value}
        />
      </ContextMenu>
    </OverlayWrapper>
  )
}
