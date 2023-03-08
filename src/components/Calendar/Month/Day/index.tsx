
import { DayWrap } from "./styled"
import dayjs from "dayjs"

export const Day = ({
  onChange,
  day,
  value,
  month,
  minDate,
  maxDate,
  noFuture,
}) => (
  <DayWrap
    onClick={() => onChange(day.format("YYYY-MM-DD"))}
    blocked={
      (minDate && day.isBefore(minDate)) ||
      (maxDate && day.isAfter(maxDate)) ||
      (noFuture && day.isAfter(dayjs()))
    }
    active={value && day.diff(dayjs(value).startOf("day"), "days") === 0}
    today={day.diff(dayjs().startOf("day"), "days") === 0}
    outside={day.startOf("month").diff(month.startOf("month"), "months") !== 0}
  >
    {day.format("D")}
  </DayWrap>
)
