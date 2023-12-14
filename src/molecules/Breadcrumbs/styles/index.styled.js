import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { font } from '../../../atoms/typography';
import { shadow } from '../../../atoms/shadows';
import { atMinWidth } from '../../../atoms/breakpoints';

import {
  breadcrumbTheme,
  dropdownTheme,
  dropdownItemTheme,
  ellipsisTheme,
  homeIconTheme,
} from './theme';

const defaultStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 6px;
  ${font('text', 'sm', '500')}
  transition-property: background-color, color, border-radius, border, outline;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
`;

export const Container = styled.nav`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Breadcrumb = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BreadcrumbLink = styled(Link)`
  ${defaultStyles}
  padding: 4px 8px;

  ${({ theme }) => {
    return css`
      color: ${breadcrumbTheme.resting[theme].color};

      &:hover {
        color: ${breadcrumbTheme.hover[theme].color};
      }

      &:focus-visible {
        border-radius: ${breadcrumbTheme.focus[theme].borderRadius};
        background: ${breadcrumbTheme.focus[theme].background};
        color: ${breadcrumbTheme.focus[theme].color};
      }

      &.disabled {
        color: ${breadcrumbTheme.disabled[theme].color};
        pointer-events: none;
        cursor: default;
      }
    `;
  }}
`;

export const HomeLink = styled(Link)`
  ${defaultStyles}
  padding: 4px;

  ${({ theme }) => {
    return css`
      svg {
        color: ${homeIconTheme.resting[theme].color};
      }

      &:hover {
        svg {
          color: ${homeIconTheme.hover[theme].color};
        }
      }

      &:focus-visible {
        border-radius: ${homeIconTheme.focus[theme].borderRadius};
        background: ${homeIconTheme.focus[theme].background};
        svg {
          color: ${homeIconTheme.focus[theme].color};
        }
      }
    `;
  }}
`;

export const BreadcrumbButton = styled.button`
  ${defaultStyles}
  padding: 8px;

  ${({ theme }) => {
    return css`
      color: ${ellipsisTheme[theme].color};

      &:focus-visible {
        border-radius: ${breadcrumbTheme.focus[theme].borderRadius};
        background: ${breadcrumbTheme.focus[theme].background};
      }
    `;
  }}
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 36px;
  left: 0px;
  width: 150px;
  border-radius: 4px;
  border: 1px solid ${color.darkGrey[100]};
  background-color: ${color.common.white};
  overflow: hidden;
  ${shadow('lg', 'dark')}
  z-index: 100;

  ${atMinWidth.sm`
    width: 250px;
  `}

  ${({ theme }) => {
    return css`
      background: ${dropdownTheme[theme].background};
      border-radius: ${dropdownTheme[theme].borderRadius};
      border: ${dropdownTheme[theme].border};
      boxshadow: ${dropdownTheme[theme].boxShadow};
    `;
  }}

  && ${BreadcrumbLink} {
    ${({ theme }) => {
      return css`
        color: ${dropdownItemTheme.resting[theme].color};
        background: ${dropdownItemTheme.resting[theme].background};
        border-bottom: ${dropdownItemTheme.resting[theme].borderBottom};

        &:hover {
          color: ${dropdownItemTheme.hover[theme].color};
          background: ${dropdownItemTheme.hover[theme].background};
        }

        &:focus-visible {
          color: ${dropdownItemTheme.focus[theme].color};
          background: ${dropdownItemTheme.focus[theme].background};
          outline: ${dropdownItemTheme.focus[theme].outline};
          outline-offset: ${dropdownItemTheme.focus[theme].outlineOffset};
        }

        &.disabled {
          color: ${breadcrumbTheme.disabled[theme].color};
          pointer-events: none;
          cursor: default;
        }
      `;
    }}

    padding: 4px 12px;
    border-radius: 0px;
    white-space: wrap;

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: none;
    }
  }
`;
