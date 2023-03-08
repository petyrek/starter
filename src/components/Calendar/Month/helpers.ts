export const getDateRange = (start, end) => {
  let day = start
  let days = []

  while (day.isBefore(end)) {
    days.push(day)
    day = day.add(1, "days")
  }

  return days
}
