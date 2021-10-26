import moment from "moment"

const yearToDecadeEndingWith = ending => offsetYears => {
  const y = moment()
    .add(offsetYears, "years")
    .format("YYYY") //parseInt(2014%10, 10)
  return +`${parseInt(y / 10, 10)}${ending}`
}

export const startOfDecade = yearToDecadeEndingWith(0)
export const endOfDecade = yearToDecadeEndingWith(9)
