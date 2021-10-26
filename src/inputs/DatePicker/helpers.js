export const getValue = (v, value, setValue, onChange, close) => {
  if (!value.from) {
    return setValue({ ...value, from: v })
  }
  if (!!value.to) {
    return setValue({ from: v, to: undefined })
  }
  if (v < value.from) {
    setValue({ from: v, to: value.from })
    onChange({ from: v, to: value.from })
    close()
    return
  }
  setValue({ ...value, to: v })
  onChange({ ...value, to: v })
  close()
}
