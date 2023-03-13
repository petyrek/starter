import { SideEffect } from "common/types"
import { RefObject, useEffect } from "react"

export const useClickOutside = (
  fn: SideEffect,
  refs: RefObject<HTMLDivElement>[],
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.every(
          ref => ref.current && !ref.current.contains(event.target as Node),
        )
      ) {
        fn()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [refs]) // eslint-disable-line
}
