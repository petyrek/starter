import { get } from "common/request"
import { del } from "common/request"
import { post } from "common/request"
import { put } from "common/request"

export const eventsRequest = {
  list: () => get("events"),
  detail: id => get(`event/${id}`),
  del: id => del(`event/${id}`),
  create: data => post(`event`, data),
  edit: id => data => put(`event/${id}`, data),
  join: id => put(`event/${id}/join`),
  leave: id => put(`event/${id}/leave`),
}
