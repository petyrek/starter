import { AppRoutes } from "./AppRoutes"
import type { FC } from "react"
import { ToastNotifications } from "./ToastNotifications"
import { GlobalStyle } from "./GlobalStyle"
import { ErrorBoundary } from "components/ErrorBoundary"

export const App: FC = () => (
  <ErrorBoundary>
    <GlobalStyle />
    <AppRoutes />
    <ToastNotifications />
  </ErrorBoundary>
)
