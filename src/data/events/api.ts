import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"
import { Event } from "data/events/types"

type EventData = {}

export const eventsRequest = {
  list: () => get<Event[]>("events"),
  detail: (id: number) => get<Event>(`events/${id}`),
  del: (id: number) => del(`events/${id}`),
  create: (data: EventData) => post<Event, EventData>(`events`, data),
  edit: (id: number, data: EventData) =>
    put<Event, EventData>(`events/${id}`, data),
  join: (id: number) => put(`events/${id}/join`),
  leave: (id: number) => put(`events/${id}/leave`),
} as const
