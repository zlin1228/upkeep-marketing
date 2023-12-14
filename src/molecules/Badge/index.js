import React from 'react';

import { BadgeContainer, StyledIcon } from './styles/index.styled';

const Badge = ({
  label,
  size = 'md',
  startIcon,
  endIcon,
  backgroundColor,
  textColor,
  iconColor,
  children,
  ...props
}) => (
  <BadgeContainer
    size={size}
    backgroundColor={backgroundColor}
    textColor={textColor}
    noLabel={!label}
    startIcon={startIcon}
    endIcon={endIcon}
    {...props}
  >
    {startIcon && (
      <StyledIcon
        id={startIcon}
        fillColor={iconColor}
        strokeColor={iconColor}
      />
    )}
    {label}
    {endIcon && (
      <StyledIcon id={endIcon} fillColor={iconColor} strokeColor={iconColor} />
    )}
    {children}
  </BadgeContainer>
);

export default Badge;
