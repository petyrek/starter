import { YearWrap, StyledYear } from "./styled"
import dayjs from "dayjs"
import { months } from "../months"
import { FC } from "react"

type Props = {
  onChange: (v: number) => void
  offset: number
}

export const Year: FC<Props> = ({ onChange, offset }) => (
  <YearWrap>
    {months.map((x, xi) => (
      <StyledYear
        key={x}
        onClick={() => onChange(xi + offset * 12 - +dayjs().format("M") + 1)}
      >
        {x}
      </StyledYear>
    ))}
  </YearWrap>
)
