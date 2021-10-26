import moment from "moment"
import { Month } from "./Month"

export const Calendar = ({
  onChange,
  value,
  noFuture,
  minDate,
  maxDate,
  mode,
  setMode,
  setOffset,
  offset,
  ...p
}) => {
  return (
    <Month
      value={value}
      onChange={onChange}
      month={moment().add(offset, "months")}
      minDate={minDate}
      maxDate={maxDate}
      noFuture={noFuture}
      {...p}
    />
  )
}
