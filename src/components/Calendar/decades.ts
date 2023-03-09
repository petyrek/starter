import dayjs from "dayjs"

const yearToDecadeEndingWith = (ending: number) => (offsetYears: number) => {
  const y = dayjs().add(offsetYears, "years").format("YYYY")
  return +`${parseInt(`${+y / 10}`, 10)}${ending}`
}

export const startOfDecade = yearToDecadeEndingWith(0)
export const endOfDecade = yearToDecadeEndingWith(9)
