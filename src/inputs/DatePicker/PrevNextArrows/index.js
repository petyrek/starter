import React from "react"
import { PrevNextArrowsWrap, Title } from "./styled"
import { getTitle, calculateHigherModeAndOffset } from "./helpers"
import { Icon } from "components/Icon"
import { Arrow } from "assets/icons/Arrow"
import { useMedia } from "hooks/useMedia"
import { isLastMode } from "../modes"

export const PrevNextArrows = ({ offset, setOffset, mode, setMode }) => {
  const isLast = isLastMode(mode)
  const { isMobile } = useMedia()

  return (
    <PrevNextArrowsWrap>
      <Icon w={40} h={40} width={8} onClick={() => setOffset(offset - 1)}>
        <Arrow />
      </Icon>

      {!isMobile && (
        <Title
          medium
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
          {getTitle(mode, offset - 1)}
        </Title>
      )}
      <Title
        medium
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

      <Icon
        w={40}
        h={40}
        width={8}
        onClick={() => setOffset(offset + 1)}
        rotate={180}
      >
        <Arrow />
      </Icon>
    </PrevNextArrowsWrap>
  )
}
