import React from 'react';
import Icon from '../../../../molecules/Icon';
import { PrevButton } from '../styles/Controls.styled';

const Prev = ({ sliderRef }) => (
  <PrevButton type="button" onClick={() => sliderRef?.current?.slickPrev()}>
    <Icon
      id="fa-solid fa-chevron-left"
      width="16px"
      height="16px"
      color="#fff"
    />
  </PrevButton>
);

export default Prev;
