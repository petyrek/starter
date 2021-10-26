import { Subject } from "rxjs"
import { toastTypes } from "./toastTypes"

export const notifications$ = new Subject()

let id = 0
export const toast = type => message =>
  notifications$.next({ message, type: type, id: id++ })

export const toastError = toast(toastTypes.error)
export const toastSuccess = toast(toastTypes.success)
