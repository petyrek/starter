// stops execution of validators when the previous one yields error
const combineValidators =
  (...validatorFunctions) =>
  v =>
    validatorFunctions.reduce((acc, cur) => (acc ? acc : cur(v)), "")

export const stringRequired = v => !v && "Field is required"

export const emailRequired = combineValidators(
  stringRequired,
  v => !/\S+@\S+\.\S+/.test(v) && "Incorrect email format",
)
