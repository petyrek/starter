export type CalendarMode = "month" | "year" | "decade"

export const modes = {
  month: "month",
  year: "year",
  decade: "decade",
} as const satisfies Record<CalendarMode, CalendarMode>
