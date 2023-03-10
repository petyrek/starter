import { MonthWrap, Week } from "./styled"
import * as R from "ramda"
import { Day } from "./Day"
import { daysOfWeek } from "./daysOfWeek"
import { getDateRange } from "./helpers"
import { FC } from "react"
import { Dayjs } from "dayjs"

const handleOverflow = (num: number) => (num < 0 ? 6 : num)

type Props = {
  month: Dayjs
  value?: string
  onChange: (v: string) => void
  noFuture?: boolean
  minDate?: Date
  maxDate?: Date
}

export const Month: FC<Props> = ({
  month,
  onChange,
  value,
  minDate,
  maxDate,
  noFuture,
}) => {
  const startOfThisMonth = month.startOf("month")
  const daysInLastMonth = handleOverflow(startOfThisMonth.day() - 1)
  const daysInNextMonth = 42 - daysInLastMonth - startOfThisMonth.daysInMonth()

  const start = startOfThisMonth.subtract(daysInLastMonth, "days")
  const end = month.endOf("month").add(daysInNextMonth, "days")
  const days = getDateRange(start, end)

  return (
    <MonthWrap>
      <Week>
        {daysOfWeek.map(x => (
          <p key={x}>{x}</p>
        ))}
      </Week>
      {R.splitEvery(7, days).map((g, gi) => (
        <Week key={gi}>
          {g.map(d => (
            <Day
              key={d.toISOString()}
              day={d}
              value={value}
              onChange={onChange}
              month={month}
              minDate={minDate}
              maxDate={maxDate}
              noFuture={noFuture}
            />
          ))}
        </Week>
      ))}
    </MonthWrap>
  )
}
