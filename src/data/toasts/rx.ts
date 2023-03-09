import { Subject } from "rxjs"
import { Toast, ToastType, toastTypes } from "./types"

export const notifications$ = new Subject<Toast>()

let id = 0
export const toast = (type: ToastType) => (message: string) =>
  notifications$.next({ message, type: type, id: id++ })

export const toastError = toast(toastTypes.error)
export const toastWarning = toast(toastTypes.warning)
export const toastSuccess = toast(toastTypes.success)
