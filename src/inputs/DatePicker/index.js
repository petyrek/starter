import React from "react"
import moment from "moment"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { ContextMenu } from "components/ContextMenu"
import { Calendar } from "components/Calendar"
import { withField } from "hoc/withField"
import { Textfield } from "inputs/Textfield"

export const DatePicker = withField(({ value, onChange }) => {
  const { isOpen, toggle, close } = useOpen()

  return (
    <OverlayWrapper isOpen={isOpen} close={close}>
      <Textfield
        value={moment(value).format("DD. MM. YYYY")}
        onClick={toggle}
      />
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
})
