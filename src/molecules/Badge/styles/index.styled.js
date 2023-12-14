import styled, { css } from 'styled-components';

import Icon from '../../Icon';

import { font } from '../../../atoms/typography';

const IconSize = '12px';

const badgeStyles = {
  sm: {
    base: css`
      padding: 2px 8px;
      ${font('text', 'xs', 500)}
    `,
    startIcon: css`
      padding: 2px 8px 2px 6px;
    `,
    endIcon: css`
      padding: 2px 6px 2px 8px;
    `,
    noLabel: css`
      width: 20px;
      height: 20px;
    `,
  },
  md: {
    base: css`
      padding: 2px 10px;
      ${font('text', 'sm', 500)}
    `,
    startIcon: css`
      padding: 2px 10px 2px 8px;
    `,
    endIcon: css`
      padding: 2px 6px 2px 10px;
    `,
    noLabel: css`
      width: 24px;
      height: 24px;
    `,
  },
  lg: {
    base: css`
      padding: 4px 12px;
      ${font('text', 'sm', 500)}
    `,
    startIcon: css`
      padding: 4px 12px 4px 10px;
    `,
    endIcon: css`
      padding: 4px 10px 4px 12px;
    `,
    noLabel: css`
      width: 28px;
      height: 28px;
    `,
  },
};

export const StyledIcon = styled(Icon).attrs(() => ({
  width: IconSize,
  height: IconSize,
}))``;

export const BadgeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  ${({ size }) => badgeStyles[size].base}
  ${({ startIcon, size }) => startIcon && badgeStyles[size].startIcon}
  ${({ endIcon, size }) => endIcon && badgeStyles[size].endIcon}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ textColor }) => textColor && `color: ${textColor};`}
  ${({ noLabel, size }) =>
    noLabel &&
    css`
      ${badgeStyles[size].noLabel}
      justify-content: center;
      border-radius: 50%;
      padding: 0px;
    `}
`;
