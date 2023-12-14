import React from 'react';

import { Wrapper, Item, LogoWrapper, Border } from '../styles/Controls.styled';

import GatsbyImage from '../../../Image/GatsbyImage';

const Controls = ({ component, activeSlide, sliderRef }) => {
  const handleClick = id => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(id);
    }
  };

  return (
    <Wrapper>
      {component?.slides?.map((slide, id) => (
        <Item
          key={slide?.id}
          id={id}
          activeSlide={activeSlide}
          onClick={() => handleClick(id)}
        >
          <LogoWrapper id={id} activeSlide={activeSlide}>
            <GatsbyImage
              src={slide?.icon?.gatsbyImageData}
              alt={slide?.icon?.altText}
            />
          </LogoWrapper>
          <Border id={id} activeSlide={activeSlide} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default Controls;
