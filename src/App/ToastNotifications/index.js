import React, { useState, useEffect } from "react"
import { StyledToastWrapper } from "./styled"
import { Toast } from "./Toast"
import { notifications$ } from "data/toasts/rx"
import * as R from "ramda"

export const ToastNotifications = () => {
  const [toasts, setToasts] = useState([])
  useEffect(() => {
    const sub = notifications$.subscribe(v => {
      setToasts(R.append(v))
    })
    return () => sub.unsubscribe()
  }, [])

  return (
    <StyledToastWrapper>
      {toasts.map(x => (
        <Toast
          {...x}
          key={x.id}
          closeToast={() => setToasts(R.filter(y => x.id !== y.id))}
        />
      ))}
    </StyledToastWrapper>
  )
}
