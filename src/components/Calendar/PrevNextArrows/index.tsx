
import { ArrowRight } from "icons/ArrowRight"
import { PrevNextArrowsWrap, Title } from "./styled"
import { isLastMode } from "../modes"
import { getTitle, calculateHigherModeAndOffset } from "./helpers"
import { Icon } from "components/Icon"

export const PrevNextArrows = ({ offset, setOffset, mode, setMode }) => {
  const isLast = isLastMode(mode)

  return (
    <PrevNextArrowsWrap>
      <Icon
        rotate="1"
        icon={ArrowRight}
        onClick={() => setOffset(offset - 1)}
      />
      <Title
        onClick={
          isLast
            ? undefined
            : () => {
                const [nextMode, nextOffset] = calculateHigherModeAndOffset(
                  mode,
                  offset,
                )
                setMode(nextMode)
                setOffset(nextOffset)
              }
        }
      >
        {getTitle(mode, offset)}
      </Title>
      <Icon icon={ArrowRight} onClick={() => setOffset(offset + 1)} />
    </PrevNextArrowsWrap>
  )
}
