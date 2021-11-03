import * as R from "ramda"

export const modes = {
  month: "month",
  year: "year",
  decade: "decade",
}

export const isLastMode = (mode) =>
  R.pipe(R.values, R.last, R.equals(mode))(modes)
