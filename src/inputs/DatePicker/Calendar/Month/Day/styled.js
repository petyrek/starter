import styled, { css } from "styled-components/macro"
import { theme } from "theme"

export const DayWrap = styled.div`
  color: ${theme.colors.white};
  cursor: pointer;
  margin-top: 4px;

  :hover {
    div {
      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        background: rgba(${theme.rgbColors.white}, 0.12);
        left: 0;
      }
    }
  }

  &.highlighted {
    ${p =>
      !p.lastHighlight &&
      css`
        background: rgba(${theme.rgbColors.white}, 0.12);
      `}

    :first-of-type {
      ${p =>
        !p.lastHighlight &&
        css`
          background: linear-gradient(
            270deg,
            rgba(${theme.rgbColors.white}, 0.12) 0%,
            rgba(${theme.rgbColors.white}, 0.12) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 100%
          );

          div {
            background: linear-gradient(
              90deg,
              rgba(${theme.rgbColors.white}, 0.12) 0%,
              rgba(${theme.rgbColors.white}, 0.12) 50%,
              rgba(${theme.rgbColors.blue2}, 0) 50%,
              rgba(${theme.rgbColors.blue2}, 0) 100%
            );
          }
        `}
    }

    :last-of-type {
      background: linear-gradient(
        90deg,
        rgba(${theme.rgbColors.white}, 0.12) 0%,
        rgba(${theme.rgbColors.white}, 0.12) 50%,
        rgba(${theme.rgbColors.blue2}, 0) 50%,
        rgba(${theme.rgbColors.blue2}, 0) 100%
      );
      div {
        background: linear-gradient(
          270deg,
          rgba(${theme.rgbColors.white}, 0.12) 0%,
          rgba(${theme.rgbColors.white}, 0.12) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 100%
        );
      }
    }
  }
  &:not(.highlighted) + .highlighted {
    background: linear-gradient(
      270deg,
      rgba(${theme.rgbColors.white}, 0.12) 0%,
      rgba(${theme.rgbColors.white}, 0.12) 50%,
      rgba(${theme.rgbColors.blue2}, 0) 50%,
      rgba(${theme.rgbColors.blue2}, 0) 100%
    );
    div {
      background: linear-gradient(
        90deg,
        rgba(${theme.rgbColors.white}, 0.12) 0%,
        rgba(${theme.rgbColors.white}, 0.12) 50%,
        rgba(${theme.rgbColors.blue2}, 0) 50%,
        rgba(${theme.rgbColors.blue2}, 0) 100%
      );
    }
  }

  ${p =>
    p.firstDay &&
    css`
      &.highlighted {
        background: linear-gradient(
          90deg,
          rgba(${theme.rgbColors.white}, 0.12) 0%,
          rgba(${theme.rgbColors.white}, 0.12) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 100%
        );
        div {
          background: linear-gradient(
            270deg,
            rgba(${theme.rgbColors.white}, 0.12) 0%,
            rgba(${theme.rgbColors.white}, 0.12) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 100%
          );
        }
      }
    `};

  &:not(.highlighted) + .highlighted {
    &:last-of-type {
      background: none !important;
    }
  }

  ${p =>
    p.firstHighlight &&
    !p.outside &&
    css`
      :last-of-type {
        background: none !important;
        div {
          background: rgba(${theme.rgbColors.white}, 0.12) !important;
        }
      }
    `}

  ${p =>
    p.lastHighlight &&
    !p.active &&
    css`
       :not(:last-of-type,:first-of-type) {
          background: linear-gradient(
          90deg,
          rgba(${theme.rgbColors.white}, 0.12) 0%,
          rgba(${theme.rgbColors.white}, 0.12) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 100%
        );
        div {
          background: linear-gradient(
            270deg,
            rgba(${theme.rgbColors.white}, 0.12) 0%,
            rgba(${theme.rgbColors.white}, 0.12) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 100%
          );
        }
       }
      }
    `}
  ${p =>
    p.lastHighlight &&
    !p.active &&
    css`
      :first-of-type {
        background: none;
        div {
          background: rgba(${theme.rgbColors.white}, 0.12);
        }
      }
    `}

  ${p =>
    p.lastHighlight &&
    p.firstDay &&
    css`
      background: none !important;
    `}
  ${p =>
    p.customBgNone &&
    css`
      background: none !important;
    `}

  ${p =>
    p.customCase &&
    css`
      :first-of-type {
        background: none !important;
      }
    `}

  ${p =>
    p.active &&
    css`
      background: rgba(${theme.rgbColors.primaryGreen}, 0.12);
      &:first-of-type {
        background: linear-gradient(
          270deg,
          rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
          rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 100%
        );
        div {
          background: linear-gradient(
            90deg,
            rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
            rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 100%
          );
        }
      }
      &:last-of-type {
        background: linear-gradient(
          90deg,
          rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
          rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 50%,
          rgba(${theme.rgbColors.blue2}, 0) 100%
        );
        div {
          background: linear-gradient(
            270deg,
            rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
            rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 50%,
            rgba(${theme.rgbColors.blue2}, 0) 100%
          );
        }
      }
    `};

  ${p =>
    p.lastDay &&
    css`
      background: linear-gradient(
        90deg,
        rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
        rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
        rgba(${theme.rgbColors.blue2}, 1) 50%,
        rgba(${theme.rgbColors.blue2}, 1) 100%
      );
    `};

  ${p =>
    p.firstDay &&
    p.active &&
    css`
      background: linear-gradient(
        270deg,
        rgba(${theme.rgbColors.primaryGreen}, 0.12) 0%,
        rgba(${theme.rgbColors.primaryGreen}, 0.12) 50%,
        rgba(${theme.rgbColors.blue2}, 1) 50%,
        rgba(${theme.rgbColors.blue2}, 1) 100%
      );
    `};

  ${p =>
    p.firstDay &&
    css`
      &:last-of-type {
        background: none;
      }
    `};

  ${p =>
    p.lastDay &&
    css`
      &:first-of-type {
        background: none;
      }
    `};

  ${p =>
    p.outside &&
    css`
      color: ${theme.colors.blue2};
      background: none !important;
      pointer-events: none;
      div {
        background: none !important;
      }
    `};
  ${p =>
    p.blocked &&
    css`
      pointer-events: none;
      opacity: 0.42;
    `};

  ${p =>
    p.firstDay &&
    p.lastDay &&
    css`
      background: none;
    `}
`

export const DayItem = styled.div`
  border-radius: 50%;
  height: 28px;
  width: 28px;
  margin: 0 1px;
  line-height: 28px;
  position: relative;

  ${p =>
    p.today &&
    css`
      border: 1px solid ${theme.colors.white};
    `};

  ${p =>
    (p.firstDay || p.lastDay) &&
    css`
      background: ${theme.colors.primaryGreen} !important;
      border-radius: 50%;
      &:hover {
        background: ${theme.colors.primaryGreen};
      }
    `};

  ${p =>
    p.outside &&
    css`
      color: ${theme.colors.blue2};
      background: none;
    `};

  ${p =>
    p.blocked &&
    css`
      pointer-events: none;
      opacity: 0.42;
    `};
`
