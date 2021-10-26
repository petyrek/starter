import * as R from "ramda"

const breakpoints = {
  tablet: 768,
  desktop: 1024,
}

export const theme = {
  color: {
    primary: "#39C7B0",
    secondary: "#ff69b4",
    white: "#fff",
    smoke: "#f9f9fb",
    lightgrey: "#dae1e7",
    grey: "#949ea8",
    darkgrey: "#323c46",
    success: "#1ed760",
    warning: "#ffa71c",
    error: "#ED4956",
  },
  zIndices: {
    backdrop: 1,
    contextMenu: 2,
    loader: 3,
    toasts: 4,
  },
  breakpoints,
  mq: R.map(x => `@media (min-width: ${x}px)`, breakpoints),
}
