
import * as R from "ramda"

export const useOpen = (init = false) => {
  const [isOpen, setOpen] = React.useState(init)

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(R.not),
  }
}
