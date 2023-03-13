import { Portal } from "components/Portal"
import { fromEvent } from "rxjs"
import { useScrollLock } from "hooks/useScrollLock"
import { throunceTime } from "common/rxjs"
import { ContextMenuWrap, ContextToggleWrap } from "./styled"
import { getPosition, Position } from "./helpers"
import { FC, ReactNode, useEffect, useRef, useState } from "react"
import { useOpen, UseOpenProps } from "hooks/useOpen"
import { useClickOutside } from "hooks/useClickOutside"

type ElementProps = UseOpenProps

type Props = {
  toggleElement: (p: ElementProps) => ReactNode
  menuContent: (p: ElementProps) => ReactNode
}

export const ContextMenu: FC<Props> = ({ toggleElement, menuContent }) => {
  const useOpenProps = useOpen()
  const { isOpen, close } = useOpenProps

  useScrollLock(isOpen)

  const [position, setPosition] = useState<Position>({})
  const menuRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(close, [menuRef, toggleRef])

  const setup = () => {
    if (!isOpen) return

    const menu = menuRef.current
    const toggle = toggleRef.current

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

  return (
    <>
      <ContextToggleWrap isOpen={isOpen} ref={toggleRef}>
        {toggleElement(useOpenProps)}
      </ContextToggleWrap>
      {isOpen && (
        <Portal>
          <ContextMenuWrap ref={menuRef} position={position}>
            {menuContent(useOpenProps)}
          </ContextMenuWrap>
        </Portal>
      )}
    </>
  )
}
