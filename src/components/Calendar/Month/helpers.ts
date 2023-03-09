import { Dayjs } from "dayjs"

export const getDateRange = (start: Dayjs, end: Dayjs): Dayjs[] => {
  let day = start
  let days = []

  while (day.isBefore(end)) {
    days.push(day)
    day = day.add(1, "days")
  }

  return days
}
