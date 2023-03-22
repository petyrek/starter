import { Portal } from "components/Portal"
import { fromEvent } from "rxjs"
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

  const [position, setPosition] = useState<Position>({})
  const menuRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(close, [menuRef, toggleRef])

  const setup = (isOpen: boolean) => {
    if (!isOpen) return

    const menu = menuRef.current
    const toggle = toggleRef.current

    if (!menu || !toggle) return

    setPosition(getPosition(menu, toggle))
  }

  useEffect(() => {
    setup(isOpen)
  }, [isOpen]) // eslint-disable-line

  useEffect(() => {
    const resizeListener = fromEvent(window, "resize").subscribe(() =>
      setup(isOpen),
    )
    const scrollListener = fromEvent(window, "scroll").subscribe(() =>
      setup(isOpen),
    )

    return () => {
      resizeListener.unsubscribe()
      scrollListener.unsubscribe()
    }
  }, [isOpen]) // eslint-disable-line

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
