import React from "react"
import { Portal } from "react-portal"
import { fromEvent } from "rxjs"
import { debounceTime } from "rxjs/operators"
import { ContextMenuWrap } from "./styled"
import { getPos } from "./helpers"

export const ContextMenu = ({ children, isOpen, isTooltip }) => {
  const [pos, setPos] = React.useState({})
  const ref = React.useRef(null)

  const setup = () => {
    if (!isOpen) return

    const menu = ref.current
    const toggle = menu && menu.closest(".overlay-wrapper-content")

    if (!menu || !toggle) return

    setPos(getPos(menu, toggle))
  }

  React.useEffect(() => {
    setup()
  }, [isOpen]) // eslint-disable-line

  React.useEffect(() => {
    const sub1 = fromEvent(window, "resize")
      .pipe(debounceTime(200))
      .subscribe(() => setup())
    const sub2 = fromEvent(document, "keydown").subscribe(e => {
      if (e.key === "Tab" && isOpen) {
        e.preventDefault()
      }
    })

    return () => {
      sub1.unsubscribe()
      sub2.unsubscribe()
    }
  }, []) // eslint-disable-line

  if (!isOpen) return null

  return (
    <div
      ref={r => {
        ref.current = r
      }}
    >
      <Portal>
        <ContextMenuWrap pos={pos} tooltip={isTooltip}>
          {children}
        </ContextMenuWrap>
      </Portal>
    </div>
  )
}
