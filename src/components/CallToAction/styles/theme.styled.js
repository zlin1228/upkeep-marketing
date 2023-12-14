import { css } from 'styled-components';

import { color } from '../../../atoms/colors';
import { shadow } from '../../../atoms/shadows';
import { font } from '../../../atoms/typography';

export const defaultStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${font('display', 'tiny-xs', '700')}
  border-radius: 72px;
  transition: all 250ms ease-in-out;
  outline: none;
`;

export const svgStyles = (
  defaultColor,
  hoverColor,
  focusColor,
  disabledColor
) => css`
  && svg {
    width: 12px;
    height: 14px;
    transition: all 0.2s ease-in-out;
    use {
      fill: ${defaultColor};
      stroke: ${defaultColor};
      transition: all 0.2s ease-in-out;
    }
  }
  &&:hover svg,
  &&.hovered svg {
    use {
      fill: ${hoverColor};
      stroke: ${hoverColor};
    }
  }
  &&:focus svg,
  &&.focused svg {
    use {
      fill: ${focusColor};
      stroke: ${focusColor};
    }
  }
  &&.disabled svg {
    use {
      fill: ${disabledColor};
      stroke: ${disabledColor};
    }
  }
`;

export const deprecatedVariants = {
  Primary: css`
    background: ${color.blue[700]};
    border: 2px solid ${color.blue[700]};
    color: ${color.common.white};
    ${svgStyles(color.common.white, color.common.white)}
    &:hover {
      background: ${color.blue[900]};
      border: 2px solid ${color.blue[900]};
      color: ${color.common.white};
      ${shadow('xs', 'dark')};
    }
  `,
  'Primary-Light': css`
    background: ${color.common.white};
    border: 2px solid ${color.common.white};
    color: ${color.blue[700]};
    ${svgStyles(color.blue[700], color.blue[900])}
    &:hover {
      background: ${color.common.neutral};
      border: 2px solid ${color.common.neutral};
      color: ${color.blue[900]};
      ${shadow('xs', 'dark')};
    }
  `,
  Secondary: css`
    background: ${color.common.transparent};
    color: ${color.blue[700]};
    border: 2px solid ${color.blue[700]};
    ${svgStyles(color.blue[700], color.blue[900])}
    &:hover {
      background: ${color.common.transparent};
      color: ${color.blue[900]};
      border: 2px solid ${color.blue[900]};
    }
  `,
  'Secondary-Light': css`
    background: ${color.common.transparent};
    color: ${color.common.white};
    border: 2px solid ${color.common.white};
    ${svgStyles(color.common.white, color.common.neutral)}
    &:hover {
      background: ${color.common.transparent};
      color: ${color.mediumGrey[200]};
      border: 2px solid ${color.mediumGrey[200]};
    }
  `,
  Tertiary: css`
    background: ${color.common.white};
    color: ${color.darkBlue[900]};
    border: 2px solid ${color.common.white};
    ${svgStyles(color.darkBlue[900], color.darkBlue[900])}
    &:hover {
      background: ${color.mediumGrey[200]};
      border: 2px solid ${color.mediumGrey[200]};
      color: ${color.darkBlue[900]};
      ${shadow('xs', 'dark')};
    }
  `,
  'Tertiary-Light': css`
    background: ${color.common.white};
    border: 2px solid ${color.common.white};
    color: ${color.darkBlue[900]};
    ${svgStyles(color.darkBlue[900], color.darkBlue[900])}
    &:hover {
      background: ${color.common.neutral};
      border: 2px solid ${color.common.neutral};
      color: ${color.darkBlue[900]};
      ${shadow('xs', 'dark')};
    }
  `,
  'Tertiary-Red': css`
    background: ${color.common.white};
    color: ${color.primary[700]};
    border: 2px solid ${color.common.white};
    ${svgStyles(color.primary[700], color.primary[900])}
    &:hover {
      background: ${color.common.neutral};
      border: 2px solid ${color.common.neutral};
      color: ${color.primary[900]};
      ${shadow('xs', 'dark')};
    }
  `,
  'Tertiary-Dark': css`
    background: ${color.common.white};
    color: ${color.darkBlue[900]};
    border: 2px solid ${color.common.white};
    ${svgStyles(color.darkBlue[900], color.darkBlue[900])}
    &:hover {
      background: ${color.mediumGrey[100]};
      border: 2px solid ${color.mediumGrey[100]};
      color: ${color.darkBlue[900]};
      ${shadow('xs', 'dark')};
    }
    &:focus {
      background: ${color.mediumGrey[100]};
      border: 2px solid ${color.primary[500]};
      color: ${color.darkBlue[900]};
      ${shadow('xs', 'dark')};
    }
    &.disabled {
      background: ${color.mediumGrey[900]};
      border: 2px solid ${color.mediumGrey[700]};
      color: ${color.mediumGrey[400]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  Red: css`
    background: ${color.primary[700]};
    color: ${color.common.white};
    border: 2px solid ${color.primary[700]};
    opacity: 1;
    ${svgStyles(color.common.white, color.common.white)}
    &:hover {
      background: ${color.primary[400]};
      color: ${color.common.white};
      border: 2px solid ${color.primary[400]};
      ${shadow('xs', 'dark')};
    }
    &:focus {
      background: ${color.primary[700]};
      color: ${color.common.white};
      border: 2px solid ${color.darkGrey[200]};
      outline: 2px solid ${color.darkGrey[200]};
      ${shadow('xs', 'dark')};
    }
    &.disabled {
      background: ${color.primary[100]};
      border: 2px solid ${color.primary[100]};
      color: ${color.mediumGrey[400]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Red-Light': css`
    background: ${color.common.white};
    color: ${color.primary[700]};
    border: 2px solid ${color.common.white};
    opacity: 1;
    ${svgStyles(color.primary[700], color.primary[700])}
    &:hover {
      opacity: 0.7;
      color: ${color.primary[700]};
      ${shadow('xs', 'dark')};
    }
  `,
  'Red-Outlined': css`
    background: ${color.common.transparent};
    color: ${color.primary[700]};
    border: 2px solid ${color.primary[700]};
    ${svgStyles(color.primary[700], color.primary[700])}
    &:hover {
      opacity: 0.7;
      background: ${color.common.transparent};
      color: ${color.primary[700]};
      ${shadow('xs', 'dark')};
    }
  `,
  'Red-Light-Outlined': css`
    background: ${color.common.transparent};
    color: ${color.common.white};
    border: 2px solid ${color.common.white};
    opacity: 1;
    ${svgStyles(color.common.white, color.common.white)}
    &:hover {
      opacity: 0.7;
      color: ${color.common.white};
      ${shadow('xs', 'dark')};
    }
  `,
  'Red-Arrow-Link': css`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    color: ${color.primary[700]};
    transition: all 0.2s ease-in-out;
    ${svgStyles(color.primary[700], color.primary[700])}
    &:hover,
    &.hovered {
      color: ${color.primary[700]};
      svg {
        position: relative;
        transform: translateX(5px);
      }
    }
  `,
  'Arrow-Link': css`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    color: ${color.darkBlue[900]};
    transition: all 0.2s ease-in-out;
    ${svgStyles(color.darkBlue[700], color.darkBlue[700])}
    &:hover,
    &.hovered {
      color: ${color.mediumGrey[500]};
      svg {
        position: relative;
        transform: translateX(5px);
      }
    }
  `,
  'Arrow-Link-Light': css`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    color: ${color.common.white};
    transition: all 0.2s ease-in-out;
    ${svgStyles(color.common.white, color.common.white)}
    &:hover,
    &.hovered {
      color: ${color.mediumGrey[100]};
      svg {
        position: relative;
        transform: translateX(5px);
      }
    }
  `,
  'Steel-Arrow-Link': css`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
    text-align: left;
    ${font('display', 'tiny-xs', '700')}
    color: ${color.steel[700]};
    transition: all 0.2s ease-in-out;
    ${svgStyles(color.steel[700], color.steel[700])}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      ${svgStyles(color.darkBlue[1000], color.darkBlue[1000])}
      svg {
        position: relative;
        transform: translateX(5px);
      }
    }
  `,
};

export const variants = {
  'Filled - Red': css`
    color: ${color.common.white};
    background: ${color.primary[700]};
    border: 1px solid ${color.primary[700]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.common.white,
      color.common.white,
      color.common.white,
      color.common.white
    )}
    &:hover,
    &.hovered {
      color: ${color.common.white};
      background: ${color.primary[1000]};
      border: 1px solid ${color.primary[1000]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused,
    &:focus-visible {
      color: ${color.common.white};
      background: ${color.primary[700]};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.common.white};
      background: ${color.darkGrey[100]};
      border: 1px solid ${color.darkGrey[100]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Filled - Steel': css`
    color: ${color.common.white};
    background: ${color.steel[700]};
    border: 1px solid ${color.steel[700]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.common.white,
      color.common.white,
      color.common.white,
      color.common.white
    )}
    &:hover,
    &.hovered {
      color: ${color.common.white};
      background: ${color.steel[400]};
      border: 1px solid ${color.steel[400]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused,
    &:focus-visible {
      color: ${color.common.white};
      background: ${color.steel[400]};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.common.white};
      background: ${color.darkGrey[100]};
      border: 1px solid ${color.darkGrey[100]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Filled - Dark': css`
    color: ${color.common.white};
    background: ${color.darkBlue[1000]};
    border: 1px solid ${color.darkBlue[1000]};
    ${svgStyles(
      color.common.white,
      color.common.white,
      color.common.white,
      color.common.white
    )}
    &:hover,
    &.hovered {
      color: ${color.common.white};
      background: ${color.darkBlue[700]};
      border: 1px solid ${color.darkBlue[700]};
    }
    &:focus,
    &.focused {
      color: ${color.common.white};
      background: ${color.darkBlue[1000]};
      border: 1px solid ${color.darkBlue[1000]};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
    }
    &.disabled {
      color: ${color.common.white};
      background: ${color.darkBlue[50]};
      border: 1px solid ${color.darkBlue[50]};
      pointer-events: none;
    }
  `,
  'Filled - White': css`
    color: ${color.darkBlue[1000]};
    background: ${color.common.white};
    border: 1px solid ${color.common.white};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[500]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.darkBlue[100]};
      border: 1px solid ${color.darkBlue[100]};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.common.white};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
    }
    &.disabled {
      color: ${color.darkBlue[500]};
      background: ${color.darkBlue[800]};
      border: 1px solid ${color.darkBlue[800]};
      pointer-events: none;
    }
  `,
  'Outline - White': css`
    color: ${color.common.white};
    background: ${color.common.transparent};
    border: 1px solid ${color.common.white};
    ${svgStyles(
      color.common.white,
      color.darkBlue[200],
      color.common.white,
      color.darkBlue[500]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[200]};
      border: 1px solid ${color.darkBlue[200]};
    }
    &:focus,
    &.focused {
      color: ${color.common.white};
      border: 1px solid ${color.common.white};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
    }
    &.disabled {
      color: ${color.darkBlue[700]};
      border: 1px solid ${color.darkBlue[700]};
      pointer-events: none;
    }
  `,
  'Outline - Dark': css`
    color: ${color.darkBlue[1000]};
    background: ${color.common.white};
    border: 1px solid ${color.darkBlue[1000]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.grey[300]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.primary[700]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.darkBlue[1000]};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
    }
    &.disabled {
      color: ${color.grey[300]};
      background: ${color.common.white};
      border: 1px solid ${color.grey[200]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Outline - Steel': css`
    color: ${color.darkBlue[1000]};
    background: ${color.common.transparent};
    border: 1px solid ${color.steel[700]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.grey[300]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.common.transparent};
      border: 1px solid ${color.steel[900]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.common.transparent};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.grey[500]};
      background: ${color.common.transparent};
      border: 1px solid ${color.grey[300]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Outline Dark - Midnight': css`
    color: ${color.darkBlue[1000]};
    background: ${color.midnight[50]};
    border: 1px solid ${color.darkBlue[1000]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.grey[300]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.midnight[100]};
      border: 1px solid ${color.darkBlue[1000]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.midnight[50]};
      border: 1px solid ${color.darkBlue[1000]};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f2f4f7;
    }
    &.disabled {
      color: ${color.grey[300]};
      background: ${color.common.white};
      border: 1px solid ${color.grey[200]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Outline Dark - Transparent': css`
    color: ${color.darkBlue[1000]};
    background: ${color.common.transparent};
    border: 1px solid ${color.darkBlue[1000]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.grey[300]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.darkBlue[1000]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.darkBlue[1000]};
      ${shadow('xs', 'dark')};
    }
    &.disabled {
      color: ${color.grey[300]};
      background: ${color.common.white};
      border: 1px solid ${color.grey[200]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Outline Red - White': css`
    color: ${color.darkBlue[1000]};
    background: ${color.common.white};
    border: 1px solid ${color.primary[700]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.darkBlue[1000],
      color.grey[300]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.primary[1000]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.darkBlue[1000]};
      background: ${color.common.white};
      border: 1px solid ${color.primary[700]};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
    }
    &.disabled {
      color: ${color.grey[300]};
      background: ${color.common.white};
      border: 1px solid ${color.primary[50]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Outline Red - Dark': css`
    color: ${color.common.white};
    background: ${color.darkBlue[1000]};
    border: 1px solid ${color.primary[700]};
    ${shadow('xs', 'dark')};
    ${svgStyles(
      color.common.white,
      color.common.white,
      color.common.white,
      color.darkBlue[500]
    )}
    &:hover,
    &.hovered {
      color: ${color.common.white};
      background: ${color.darkBlue[1000]};
      border: 1px solid ${color.primary[1000]};
      ${shadow('xs', 'dark')};
    }
    &:focus,
    &.focused {
      color: ${color.common.white};
      background: ${color.darkBlue[1000]};
      border: 1px solid ${color.primary[700]};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #b1e0eb;
    }
    &.disabled {
      color: ${color.darkBlue[500]};
      background: ${color.darkBlue[1000]};
      border: 1px solid ${color.darkBlue[700]};
      ${shadow('xs', 'dark')};
      pointer-events: none;
    }
  `,
  'Link - White': css`
    color: ${color.common.white};
    padding: 0px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    ${svgStyles(
      color.common.white,
      color.darkBlue[300],
      color.common.white,
      color.darkBlue[700]
    )}
    &:hover,
    &.hovered {
      color: ${color.darkBlue[300]};
    }
    &:focus,
    &:focus-visible,
    &.focused {
      color: ${color.common.white};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.darkBlue[700]};
    }
  `,
  'Link - Red': css`
    color: ${color.primary[700]};
    padding: 0px;
    border-radius: 4px;
    ${svgStyles(
      color.primary[700],
      color.primary[1000],
      color.primary[700],
      color.darkBlue[100]
    )}
    &:hover,
    &.hovered {
      color: ${color.primary[1000]};
    }
    &:focus,
    &:focus-visible,
    &.focused {
      color: ${color.primary[700]};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.darkBlue[100]};
    }
  `,
  'Link - Dark': css`
    color: ${color.darkBlue[1000]};
    padding: 0px;
    border-radius: 4px;
    ${svgStyles(
      color.darkBlue[1000],
      color.darkBlue[400],
      color.darkBlue[1000],
      color.darkBlue[100]
    )}
    &:hover,
    &.hovered {
      color: ${color.steel[800]};
    }
    &:focus,
    &:focus-visible,
    &.focused {
      color: ${color.darkBlue[1000]};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.darkBlue[100]};
    }
  `,
  'Link - Steel': css`
    color: ${color.steel[700]};
    padding: 0px;
    border-radius: 4px;
    ${svgStyles(
      color.steel[700],
      color.steel[800],
      color.steel[800],
      color.steel[100]
    )}
    &:hover,
    &.hovered {
      color: ${color.steel[800]};
    }
    &:focus,
    &:focus-visible,
    &.focused {
      color: ${color.steel[1000]};
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
    &.disabled {
      color: ${color.steel[100]};
    }
  `,
  Clickable: css`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: 100;

    &:focus,
    &:focus-visible,
    &.focused {
      outline: 4px solid ${color.steel[700]};
      outline-offset: 4px;
    }
  `,
};

export const sizes = {
  sm: css`
    ${font('display', 'tiny-xs', '700')}
    padding: 7px 14px;
  `,
  md: css`
    ${font('display', 'tiny-xs', '700')}
    padding: 9px 16px;
  `,
  lg: css`
    ${font('display', 'tiny-sm', '700')}
    padding: 9px 18px;
  `,
  xl: css`
    ${font('display', 'tiny-sm', '700')}
    padding: 11px 20px;
  `,
  xxl: css`
    ${font('display', 'tiny-sm', '700')}
    padding: 15px 28px;
  `,
};
