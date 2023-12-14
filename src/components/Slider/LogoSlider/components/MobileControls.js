import React from 'react';
import { Wrapper, Dot } from '../styles/MobileControls.styled';

const MobileControls = ({ component, activeSlide, sliderRef }) => (
  <Wrapper>
    {component?.slides?.map((slide, id) => {
      return (
        <Dot
          key={slide?.id}
          id={id}
          onClick={() => sliderRef.current.slickGoTo(id)}
          activeSlide={activeSlide}
        />
      );
    })}
  </Wrapper>
);

export default MobileControls;
