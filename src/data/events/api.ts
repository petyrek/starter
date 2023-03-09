import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"
import { Observable } from "rxjs"
import { Event } from "data/events/types"

type EventData = {}

export const eventsRequest = {
  list: (): Observable<Event[]> => get("events"),
  detail: (id: number): Observable<Event> => get(`events/${id}`),
  del: (id: number) => del(`events/${id}`),
  create: (data: EventData) => post(`events`, data),
  edit: (id: number, data: EventData) => put(`events/${id}`, data),
  join: (id: number) => put(`events/${id}/join`),
  leave: (id: number) => put(`events/${id}/leave`),
} as const
