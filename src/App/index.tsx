import { AppRoutes } from "./AppRoutes"
import type { FC } from "react"
import { ToastNotifications } from "./ToastNotifications"
import { GlobalStyle } from "./GlobalStyle"
import { ErrorBoundary } from "components/ErrorBoundary"

type Props = {}

export const App: FC<Props> = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <AppRoutes />
    <ToastNotifications />
  </ErrorBoundary>
)
