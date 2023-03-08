import React, { useState } from "react"
import dayjs from "dayjs"
import { Month } from "./Month"
import { Year } from "./Year"
import { Decade } from "./Decade"
import { PrevNextArrows } from "./PrevNextArrows"
import { modes } from "./modes"

export const Calendar = ({ onChange, value, noFuture, minDate, maxDate }) => {
  const [mode, setMode] = useState(modes.month)
  const [offset, setOffset] = useState(
    value
      ? dayjs(value).startOf("month").diff(dayjs().startOf("month"), "months")
      : 0,
  )

  return (
    <>
      <PrevNextArrows
        offset={offset}
        setOffset={setOffset}
        mode={mode}
        setMode={setMode}
      />
      {mode === modes.decade && (
        <Decade
          onChange={v => {
            setOffset(v)
            setMode(modes.year)
          }}
          offset={offset}
        />
      )}
      {mode === modes.year && (
        <Year
          onChange={v => {
            setOffset(v)
            setMode(modes.month)
          }}
          offset={offset}
        />
      )}
      {mode === modes.month && (
        <Month
          value={value}
          onChange={onChange}
          month={dayjs().add(offset, "months")}
          minDate={minDate}
          maxDate={maxDate}
          noFuture={noFuture}
        />
      )}
    </>
  )
}
