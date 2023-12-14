import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import settings from './utils/settings';
import { useElementDimensions } from '../../../hooks/useElementDimensions';

import {
  Section,
  SliderWrapper,
  Slide,
  BackgroundImage,
} from './styles/LogoSlider.styled';

import SlideContent from './components/SlideContent';
import Image from './components/Image';
import Controls from './components/Controls';
import MobileControls from './components/MobileControls';

const LogoSlider = ({ component }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(0);
  const sectionRef = useRef();
  const sliderRef = useRef();
  const { width } = useElementDimensions(sectionRef);
  const isMobile = width < 1170;

  return (
    <Section ref={sectionRef}>
      <BackgroundImage />
      <SliderWrapper>
        <Slider
          key={isMobile}
          ref={sliderRef}
          {...settings({ setActiveSlide, setAnimateSlide })}
        >
          {component?.slides.map((slide, id) => (
            <Slide key={slide?.id}>
              <SlideContent
                component={slide}
                id={id}
                activeSlide={activeSlide}
                animateSlide={animateSlide}
              />
              <Image component={slide} animateSlide={animateSlide} id={id} />
            </Slide>
          ))}
        </Slider>
        <Controls
          component={component}
          activeSlide={activeSlide}
          sliderRef={sliderRef}
        />
        <MobileControls
          component={component}
          activeSlide={activeSlide}
          sliderRef={sliderRef}
        />
      </SliderWrapper>
    </Section>
  );
};

export default LogoSlider;
