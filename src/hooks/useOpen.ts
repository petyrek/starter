import { SideEffect } from "common/types"
import * as R from "ramda"
import { useState } from "react"

export type UseOpenProps = {
  isOpen: boolean
  open: SideEffect
  close: SideEffect
  toggle: SideEffect
}

export const useOpen = (init = false): UseOpenProps => {
  const [isOpen, setOpen] = useState(init)

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(R.not),
  }
}
