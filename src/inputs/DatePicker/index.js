import React, { useState } from "react"
import moment from "moment"
import { Field } from "components/Field"
import { OverlayWrapper } from "components/OverlayWrapper"
import { useOpen } from "hooks/useOpen"
import { ContextMenu } from "components/ContextMenu"
import { Calendar } from "./Calendar"
import { IconWrapper, InputWrapper } from "./styled"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { getValue } from "./helpers"
import { useMedia } from "hooks/useMedia"
import { modes } from "./modes"
import { PrevNextArrows } from "./PrevNextArrows"
import { Chevron } from "assets/icons/Chevron"

export const DatePicker = ({
  value = { from: undefined, to: undefined },
  onChange,
  onConfirm,
  ...props
}) => {
  const [isOpen, open, close, toggle] = useOpen()
  const [mode, setMode] = useState(modes.month)
  const [offset, setOffset] = useState(
    value
      ? moment(value).startOf("month").diff(moment().startOf("month"), "months")
      : 0,
  )

  const [val, setVal] = useState(value)
  const [hoveredDay, setHoveredDay] = useState()

  const { isMobile } = useMedia()

  return (
    <Field {...props}>
      <OverlayWrapper
        isOpen={isOpen}
        close={v => {
          close(v)
        }}
      >
        <InputWrapper
          flex
          {...props}
          onFocus={v => open()}
          onClick={v => toggle(v)}
          isOpen={isOpen}
          acenter
        >
          <Text fs={14} readOnly>
            {val.from ? moment(val.from).format("DD. MM. YYYY") : "Od"}
          </Text>
          <Text mr={10} ml={10}>
            -
          </Text>
          <Text fs={14} readOnly>
            {val.to ? moment(val.to).format("DD. MM. YYYY") : "Do"}
          </Text>

          <IconWrapper
            w={10}
            rotate={isOpen ? 180 : 0}
            color={isOpen ? "primaryGreen" : undefined}
          >
            <Chevron />
          </IconWrapper>
        </InputWrapper>
        <ContextMenu close={close} isOpen={isOpen}>
          <PrevNextArrows
            offset={offset}
            setOffset={setOffset}
            mode={mode}
            setMode={setMode}
          />
          <Box flex pl={18} pr={18} center={isMobile}>
            {!isMobile && (
              <Calendar
                onChange={v => getValue(v, val, setVal, onChange, close)}
                from={val.from}
                to={val.to}
                open={isOpen}
                noFuture
                left
                mode={mode}
                setMode={setMode}
                offset={offset - 1}
                setOffset={setOffset}
                mr={30}
                hoveredDay={hoveredDay}
                setHoveredDay={setHoveredDay}
              />
            )}

            <Calendar
              onChange={v => getValue(v, val, setVal, onChange, close)}
              from={val.from}
              to={val.to}
              open={isOpen}
              noFuture
              right
              mode={mode}
              setMode={setMode}
              offset={offset}
              setOffset={setOffset}
              hoveredDay={hoveredDay}
              setHoveredDay={setHoveredDay}
            />
          </Box>
        </ContextMenu>
      </OverlayWrapper>
    </Field>
  )
}
