import * as R from "ramda"

export type Validator<T> = (v: T) => string

export const combineValidators =
  <T>(...validatorFunctions: Array<Validator<T>>) =>
  (v: T) =>
    validatorFunctions.reduce(
      (acc: string, cur: Validator<T>) => (acc ? acc : cur(v)),
      "",
    )

export const fieldRequired = <T>(v: T) => (v ? "" : "Field is required")

export const numberRequired: Validator<number> = combineValidators(
  fieldRequired,
  v => (R.type(v) === "Number" ? "" : "Must be number"),
)

export const stringRequired: Validator<string> = combineValidators(
  fieldRequired,
  v => (R.type(v) === "String" ? "" : "Must be string"),
)

export const emailRequired: Validator<string> = combineValidators(
  fieldRequired,
  v => (/\S+@\S+\.\S+/.test(v) ? "" : "Incorrect email format"),
)
