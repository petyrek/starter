export const getDateRange = (start, end) => {
  let day = start.clone()
  let days = []

  while (day.isBefore(end)) {
    days.push(day)
    day = day.clone().add(1, "days")
  }

  return days
}
