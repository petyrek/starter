import React from "react"
import { DayWrap, DayItem } from "./styled"
import moment from "moment"

export const Day = ({
  onChange,
  day,
  month,
  minDate,
  maxDate,
  noFuture,
  from,
  to,
  hoveredDay,
  setHoveredDay,
}) => {
  return (
    <DayWrap
      onMouseEnter={() => setHoveredDay(day)}
      onClick={() => onChange(day.format("YYYY-MM-DD"))}
      active={
        from &&
        to &&
        day.diff(moment(from).startOf("day"), "days") >= 0 &&
        day.diff(moment(to).startOf("day"), "days") <= 0
      }
      outside={
        day.clone().startOf("month").diff(month.startOf("month"), "months") !==
        0
      }
      firstDay={from && day.diff(moment(from).startOf("day"), "days") === 0}
      lastDay={to && day.diff(moment(to).startOf("day"), "days") === 0}
      blocked={
        (minDate && day.isBefore(minDate)) ||
        (maxDate && day.isAfter(maxDate)) ||
        (noFuture && day.isAfter(moment()))
      }
      className={
        from &&
        !to &&
        ((day.diff(moment(hoveredDay).startOf("day"), "days") >= 0 &&
          day.diff(moment(from).startOf("day"), "days") <= 0) ||
          (day.diff(moment(hoveredDay).startOf("day"), "days") <= 0 &&
            day.diff(moment(from).startOf("day"), "days") >= 0)) &&
        "highlighted"
      }
      lastHighlight={
        from &&
        !to &&
        day.diff(moment(from).startOf("day"), "days") > 0 &&
        day.diff(moment(hoveredDay).startOf("day"), "days") === 0
      }
      firstHighlight={
        from &&
        !to &&
        day.diff(moment(from).startOf("day"), "days") < 0 &&
        day.diff(moment(hoveredDay).startOf("day"), "days") === 0
      }
      customCase={
        from &&
        !to &&
        day.diff(moment(from).startOf("day"), "days") === 0 &&
        day.diff(moment(hoveredDay).startOf("day"), "days") >= 0
      }
      customBgNone={
        from &&
        !to &&
        day.diff(moment(from).startOf("day"), "days") === 0 &&
        day.diff(moment(hoveredDay).startOf("day"), "days") === 0
      }
    >
      <DayItem
        today={day.diff(moment().startOf("day"), "days") === 0}
        blocked={
          (minDate && day.isBefore(minDate)) ||
          (maxDate && day.isAfter(maxDate)) ||
          (noFuture && day.isAfter(moment()))
        }
        firstDay={from && day.diff(moment(from).startOf("day"), "days") === 0}
        lastDay={to && day.diff(moment(to).startOf("day"), "days") === 0}
        outside={
          day
            .clone()
            .startOf("month")
            .diff(month.startOf("month"), "months") !== 0
        }
        active={
          from &&
          to &&
          day.diff(moment(from).startOf("day"), "days") >= 0 &&
          day.diff(moment(to).startOf("day"), "days") <= 0
        }
      >
        {day.format("D")}
      </DayItem>
    </DayWrap>
  )
}
