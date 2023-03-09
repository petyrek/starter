import * as R from "ramda"
import { useState } from "react"

export const useOpen = (init = false) => {
  const [isOpen, setOpen] = useState(init)

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(R.not),
  }
}
