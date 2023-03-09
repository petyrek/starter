import { useState, useEffect } from "react"
import { StyledToastWrapper } from "./styled"
import { ToastItem } from "./ToastItem"
import { notifications$ } from "data/toasts/rx"
import * as R from "ramda"
import { Toast } from "data/toasts/types"

export const ToastNotifications = () => {
  const [toasts, setToasts] = useState<Toast[]>([])
  useEffect(() => {
    const sub = notifications$.subscribe(v => {
      setToasts(R.append(v))
    })

    return () => sub.unsubscribe()
  }, [])

  return (
    <StyledToastWrapper>
      {toasts.map(x => (
        <ToastItem
          key={x.id}
          toast={x}
          closeToast={() => setToasts(prev => prev.filter(y => x.id !== y.id))}
        />
      ))}
    </StyledToastWrapper>
  )
}
