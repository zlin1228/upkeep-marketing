import React from 'react';
import Icon from '../../Icon';
import { color } from '../../../atoms/colors';
import { Button } from '../styles/PaginationButton.styled';

const PaginationButton = ({
  theme,
  render,
  text,
  prevIcon,
  nextIcon,
  handleClick,
}) => (
  <Button theme={theme} render={render} onClick={handleClick}>
    {prevIcon && (
      <Icon
        id="fa-solid fa-chevron-left"
        width="15px"
        height="15px"
        fillColor={theme === 'dark' ? color.darkBlue[900] : color.common.white}
      />
    )}
    <span>{text}</span>
    {nextIcon && (
      <Icon
        id="fa-solid fa-chevron-right"
        width="15px"
        height="15px"
        fillColor={theme === 'dark' ? color.darkBlue[900] : color.common.white}
      />
    )}
  </Button>
);

export default PaginationButton;
