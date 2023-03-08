import React from "react"
import { YearWrap, StyledYear } from "./styled"
import dayjs from "dayjs"
import { months } from "../months"

export const Year = ({ onChange, offset }) => (
  <YearWrap>
    {months.map((x, xi) => (
      <StyledYear
        key={x}
        onClick={() => onChange(xi + offset * 12 - dayjs().format("M") + 1)}
      >
        {x}
      </StyledYear>
    ))}
  </YearWrap>
)
