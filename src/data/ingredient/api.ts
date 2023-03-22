import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"
import { IngredientBody, IngredientResponse } from "data/_generated"

export const ingredientRequest = {
  list: () => get<IngredientResponse[]>("ingredient"),
  detail: (id: number) => get<IngredientResponse>(`/ingredient/${id}`),
  del: (id: number) => del(`/ingredient/${id}`),
  create: (data: IngredientBody) =>
    post<IngredientResponse, IngredientBody>(`/ingredient`, data),
  edit: (id: number, data: IngredientBody) =>
    put<IngredientResponse, IngredientBody>(`/ingredient/${id}`, data),
} as const
