export type ToastType = "warning" | "error" | "success"

export const toastTypes = {
  warning: "warning",
  error: "error",
  success: "success",
} as const satisfies Record<ToastType, ToastType>

export type Toast = {
  id: number
  message: string
  type: ToastType
}
