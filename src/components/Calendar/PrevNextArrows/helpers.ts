import dayjs from "dayjs"
import { CalendarMode, modes } from "../modes"
import { startOfDecade, endOfDecade } from "../decades"
import { months } from "../months"

export const calculateHigherModeAndOffset = (
  mode: CalendarMode,
  offset: number,
) => {
  if (mode === modes.month) {
    const m = dayjs().add(offset, "months")
    const off = m.startOf("year").diff(dayjs().startOf("year"), "years")
    return [modes.year, off] as const
  }
  if (mode === modes.year) {
    const diff = startOfDecade(offset) - startOfDecade(0)
    const off = diff === 0 ? 0 : diff / 10
    return [modes.decade, off] as const
  }
}

export const getTitle = (mode: CalendarMode, offset: number) => {
  if (mode === modes.month) {
    const month = dayjs().add(offset, "months")
    return `${months[+month.format("M") - 1]} ${month.format("YYYY")}`
  }

  const year = dayjs().add(offset, "years")
  if (mode === modes.year) {
    return year.format("YYYY")
  }

  return `${startOfDecade(offset * 10)} - ${endOfDecade(offset * 10)}`
}
