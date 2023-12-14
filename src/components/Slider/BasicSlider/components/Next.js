import React from 'react';
import Icon from '../../../../molecules/Icon';
import { NextButton } from '../styles/Controls.styled';

const Next = ({ sliderRef }) => (
  <NextButton type="button" onClick={() => sliderRef?.current?.slickNext()}>
    <Icon
      id="fa-solid fa-chevron-right"
      width="16px"
      height="16px"
      color="#fff"
    />
  </NextButton>
);

export default Next;
