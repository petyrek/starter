import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"
import { MealBody, MealResponse } from "data/_generated"

export const mealRequest = {
  list: () => get<MealResponse[]>("meal"),
  detail: (id: number) => get<MealResponse>(`meal/${id}`),
  del: (id: number) => del(`meal/${id}`),
  create: (data: MealBody) => post<MealResponse, MealBody>(`meal`, data),
  edit: (id: number, data: MealBody) =>
    put<MealResponse, MealBody>(`meal/${id}`, data),
} as const
