import React from 'react';
import styled, { css } from 'styled-components';
import { font } from '../../atoms/typography';

import Icon from '../Icon';

const ICON_SIZE = '16px';

const BadgeGroup = ({
  children,
  position = 'leading',
  size = 'md',
  endIcon,
  startIcon,
  label,
  backgroundColor,
  textColor,
  iconColor,
  ...props
}) => (
  <Container
    size={size}
    position={position}
    backgroundColor={backgroundColor}
    textColor={textColor}
    {...props}
  >
    {startIcon && (
      <StyledIcon
        id={startIcon}
        fillColor={iconColor}
        strokeColor={iconColor}
      />
    )}
    <Wrapper position={position}>
      {children}
      {label}
    </Wrapper>
    {endIcon && (
      <StyledIcon id={endIcon} fillColor={iconColor} strokeColor={iconColor} />
    )}
  </Container>
);

export default BadgeGroup;

const badgeStyles = {
  md: {
    leading: css`
      padding: 4px 10px 4px 4px;
      ${font('text', 'xs', 500)}
    `,
    trailing: css`
      padding: 4px 4px 4px 10px;
      ${font('text', 'xs', 500)}
    `,
  },
  lg: {
    leading: css`
      padding: 4px 10px 4px 4px;
      ${font('text', 'sm', 500)}
    `,
    trailing: css`
      padding: 4px 4px 4px 14px;
      ${font('text', 'sm', 500)}
    `,
  },
};

const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 16px;

  ${({ size, position }) => badgeStyles[size][position]}

  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}

  ${({ textColor }) => textColor && `color: ${textColor};`}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ position }) =>
    position === 'trailing' &&
    css`
      flex-direction: row-reverse;
    `}
`;

const StyledIcon = styled(Icon).attrs(() => ({
  width: ICON_SIZE,
  height: ICON_SIZE,
}))``;
