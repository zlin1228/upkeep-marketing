import React from 'react';
import { Wrapper, NavItem } from '../styles/HorizontalControls.styled';

const HorizontalControls = ({ component, setActiveSlide, activeSlide }) => (
  <Wrapper>
    {component?.horizontalSlide.map((navItem, idx) => (
      <NavItem
        key={navItem?.id}
        onClick={() => setActiveSlide(idx)}
        activeSlide={activeSlide}
        idx={idx}
      >
        {navItem?.navTitle}
      </NavItem>
    ))}
  </Wrapper>
);

export default HorizontalControls;
