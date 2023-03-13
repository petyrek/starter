import * as R from "ramda"

const breakpoints = {
  tablet: 768,
  desktop: 1024,
} as const

export const theme = {
  color: {
    darkgrey: "#333",
    grey: "#666",
    lightGrey: "#999",
    border: "#f5f5f5",
    primary: "orange",
    secondary: "blue",
    success: "green",
    warning: "yellow",
    error: "red",
    backdrop: "rgba(0, 0, 0, 0.3)",
  },
  zIndices: {
    backdrop: 1,
    overlayWrapper: 2,
    contextMenu: 3,
    loader: 4,
    toasts: 5,
  },
  breakpoints,
  mq: R.mapObjIndexed(v => `@media (min-width: ${v}px)`, breakpoints),
} as const
