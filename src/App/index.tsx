import { AppRoutes } from "./AppRoutes"
import React from "react"
import { ToastNotifications } from "./ToastNotifications"
import { GlobalStyle } from "./GlobalStyle"
import { ErrorBoundary } from "components/ErrorBoundary"

export const App = () => (
    <ErrorBoundary>
      <GlobalStyle />
      <AppRoutes />
      <ToastNotifications />
    </ErrorBoundary>
  )
