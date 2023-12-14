import React from 'react';
import IconSwitcherControl from './IconSwitcherControl';
import { Container } from '../styles/IconSwitcherControls.styled';

const IconSwitcherControls = ({ slides, activeSlide, setActiveSlide }) => (
  <Container>
    {slides?.map((slide, index) => (
      <IconSwitcherControl
        key={slide?.id}
        slide={slide}
        index={index}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    ))}
  </Container>
);

export default IconSwitcherControls;
