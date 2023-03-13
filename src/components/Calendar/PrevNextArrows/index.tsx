import { ArrowRight } from "icons/ArrowRight"
import { PrevNextArrowsWrap, Title } from "./styled"
import { CalendarMode } from "../modes"
import { getTitle, calculateHigherModeAndOffset } from "./helpers"
import { Icon } from "components/Icon"
import { FC } from "react"

type Props = {
  offset: number
  setOffset: (v: number) => void
  mode: CalendarMode
  setMode: (v: CalendarMode) => void
}

export const PrevNextArrows: FC<Props> = ({
  offset,
  setOffset,
  mode,
  setMode,
}) => (
  <PrevNextArrowsWrap>
    <Icon
      rotate={180}
      icon={ArrowRight}
      onClick={() => setOffset(offset - 1)}
    />
    <Title
      onClick={() => {
        const next = calculateHigherModeAndOffset(mode, offset)

        if (next) {
          const [nextMode, nextOffset] = next

          setMode(nextMode)
          setOffset(nextOffset)
        }
      }}
    >
      {getTitle(mode, offset)}
    </Title>
    <Icon icon={ArrowRight} onClick={() => setOffset(offset + 1)} />
  </PrevNextArrowsWrap>
)
