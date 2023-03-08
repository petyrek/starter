import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"

export const eventsRequest = {
  list: () => get("events"),
  detail: id => get(`events/${id}`),
  del: id => del(`events/${id}`),
  create: data => post(`events`, data),
  edit: id => data => put(`events/${id}`, data),
  join: id => put(`events/${id}/join`),
  leave: id => put(`events/${id}/leave`),
}
