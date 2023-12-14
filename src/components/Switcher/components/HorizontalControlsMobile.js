import React, { useRef } from 'react';
import SlickSlider from 'react-slick';
import { Wrapper, NavItem } from '../styles/HorizontalControlsMobile.styled';

const HorizontalControlsMobile = ({
  component,
  setActiveSlide,
  activeSlide,
}) => {
  const sliderRef = useRef();
  const heroCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    centerMode: true,
    slidesToShow: 1,
    afterChange(currentSlide) {
      setActiveSlide(currentSlide);
    },
  };
  return (
    <Wrapper>
      <SlickSlider {...heroCarouselSettings} ref={sliderRef}>
        {component?.horizontalSlide.map((navItem, idx) => (
          <NavItem
            onClick={() => {
              setActiveSlide(idx);
              sliderRef.current.slickGoTo(idx);
            }}
            key={navItem?.id}
            activeSlide={activeSlide}
            idx={idx}
          >
            {navItem?.navTitle}
          </NavItem>
        ))}
      </SlickSlider>
    </Wrapper>
  );
};

export default HorizontalControlsMobile;
