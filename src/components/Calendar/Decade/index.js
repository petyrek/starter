import React from "react"
import { DecadeWrap, StyledDecade } from "./styled"
import dayjs from "dayjs"
import * as R from "ramda"
import { startOfDecade } from "../decades"

export const Decade = ({ onChange, offset }) => {
  const start = startOfDecade(offset * 10)

  return (
    <DecadeWrap>
      {R.range(0, 10)
        .map(R.add(start))
        .map(x => (
          <StyledDecade
            key={x}
            onClick={() =>
              onChange(dayjs().set("year", x).diff(dayjs(), "years"))
            }
          >
            {x}
          </StyledDecade>
        ))}
    </DecadeWrap>
  )
}
