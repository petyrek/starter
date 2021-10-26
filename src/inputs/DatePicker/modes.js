import * as R from "ramda"

export const modes = {
  month: "month",
}

export const isLastMode = mode => {
  const lastMode = R.compose(R.last, R.values)(modes)

  return mode === lastMode
}
