import React from "react"
import { MonthWrap, Week } from "./styled"
import * as R from "ramda"
import { Day } from "./Day"
import { daysOfWeek } from "./daysOfWeek"
import { getDateRange } from "./helpers"

const handleOverflow = num => (num < 0 ? 6 : num)

export const Month = ({
  month,
  onChange,
  value,
  minDate,
  maxDate,
  noFuture,
  from,
  to,
  ...p
}) => {
  const startOfThisMonth = month.clone().startOf("month")
  const daysInLastMonth = handleOverflow(startOfThisMonth.weekday() - 1)
  const daysInNextMonth = 42 - daysInLastMonth - startOfThisMonth.daysInMonth()

  const start = startOfThisMonth.clone().subtract(daysInLastMonth, "days")
  const end = month
    .clone()
    .endOf("month")
    .add(
      daysInNextMonth >= 14
        ? daysInNextMonth - 14
        : daysInNextMonth >= 7
        ? daysInNextMonth - 7
        : daysInNextMonth,
      "days",
    )
  const days = getDateRange(start, end)

  return (
    <MonthWrap {...p}>
      <Week>
        {daysOfWeek.map((x, xi) => (
          <p key={xi}>{x}</p>
        ))}
      </Week>
      {R.splitEvery(7, days).map((g, gi) => (
        <Week key={gi}>
          {g.map(d => (
            <Day
              key={d}
              day={d}
              onChange={onChange}
              month={month}
              minDate={minDate}
              maxDate={maxDate}
              noFuture={noFuture}
              from={from}
              to={to}
              {...p}
            />
          ))}
        </Week>
      ))}
    </MonthWrap>
  )
}
