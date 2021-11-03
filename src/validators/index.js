import * as R from "ramda"

// stops execution of validators when the previous one yields error
export const combineValidators =
  (...validatorFunctions) =>
  v =>
    validatorFunctions.reduce((acc, cur) => (acc ? acc : cur(v)), "")

export const fieldRequired = v => !v && "Field is required"

export const numberRequired = combineValidators(
  fieldRequired,
  v => R.type(v) !== "Number" && "Must be number",
)

export const stringRequired = combineValidators(
  fieldRequired,
  v => R.type(v) !== "String" && "Must be string",
)

export const emailRequired = combineValidators(
  fieldRequired,
  v => !/\S+@\S+\.\S+/.test(v) && "Incorrect email format",
)
