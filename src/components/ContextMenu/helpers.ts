export type Position = {
  bottom?: string
  top?: string
  left?: string
  right?: string
  "max-height"?: string
  "min-width"?: string
  "max-width"?: string
}

export const getPosition = (menu: Element, toggle: Element): Position => {
  const tRect = toggle.getBoundingClientRect()
  const mRect = menu.getBoundingClientRect()
  const openUpwards = tRect.top + tRect.height / 2 > window.innerHeight / 2
  const openLeft = tRect.left + tRect.width / 2 <= window.innerWidth / 2

  const yAxisStyles = openUpwards
    ? {
        bottom: `${window.innerHeight - tRect.top}px`,
        "max-height": `${tRect.top - 20}px`,
      }
    : {
        top: `${tRect.top + tRect.height}px`,
        "max-height": `${window.innerHeight - tRect.top - tRect.height - 20}px`,
      }

  const leftRightOpenStyle = openLeft
    ? {
        left: `${tRect.left}px`,
        "min-width": `${tRect.width}px`,
        "max-width": `${window.innerWidth - tRect.left - 10}px`,
      }
    : {
        right: `${window.innerWidth - tRect.left - tRect.width}px`,
        "min-width": `${tRect.width}px`,
        "max-width": `${tRect.right - 10}px`,
      }

  const widthStyles =
    mRect.width >= tRect.width
      ? leftRightOpenStyle
      : {
          left: `${tRect.left}px`,
          width: `${tRect.width}px`,
        }

  return {
    ...yAxisStyles,
    ...widthStyles,
  }
}
