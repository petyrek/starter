import { Portal } from "components/Portal"
import { fromEvent } from "rxjs"
import { throunceTime } from "common/rxjs"
import { ContextMenuWrap } from "./styled"
import { getPosition, Position } from "./helpers"
import { FC, ReactNode, useEffect, useRef, useState } from "react"

type Props = {
  children: ReactNode
  isOpen: boolean
}

export const ContextMenu: FC<Props> = ({ children, isOpen }) => {
  const [position, setPosition] = useState<Position>({})
  const ref = useRef<HTMLElement | null>(null)

  const setup = () => {
    if (!isOpen) return

    const menu = ref.current
    const toggle = menu && menu.closest(".overlay-wrapper-content")

    if (!menu || !toggle) return

    setPosition(getPosition(menu, toggle))
  }

  useEffect(() => {
    setup()
  }, [isOpen]) // eslint-disable-line

  useEffect(() => {
    const sub1 = fromEvent(window, "resize")
      .pipe(throunceTime(200))
      .subscribe(() => setup())

    const sub2 = fromEvent(document, "keydown").subscribe(e => {
      if ("key" in e && e.key === "Tab" && isOpen) {
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
        <ContextMenuWrap position={position}>{children}</ContextMenuWrap>
      </Portal>
    </div>
  )
}
