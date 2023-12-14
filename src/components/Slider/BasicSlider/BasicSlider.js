import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import BasicSlide from './components/BasicSlide';
import basicSliderSettings from './utils/basicSliderSettings';
import {
  Section,
  SliderWrapper,
  Wrapper,
  Header,
  Kicker,
  Heading,
} from './styles/BasicSlider.styled';

const BasicSlider = ({ component }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();

  if (!component) return null;
  const { headingKicker, heading, slides, theme } = component;

  return (
    <Section theme={theme}>
      <Wrapper>
        {headingKicker || heading ? (
          <Header>
            {headingKicker && <Kicker theme={theme}>{headingKicker}</Kicker>}
            {heading && <Heading theme={theme}>{heading}</Heading>}
          </Header>
        ) : null}
        {slides && slides.length > 0 ? (
          <SliderWrapper theme={theme}>
            <Slider
              ref={sliderRef}
              {...basicSliderSettings({ sliderRef, setActiveSlide })}
            >
              {slides.map((slide, idx) => (
                <BasicSlide
                  key={slide?.id}
                  component={slide}
                  idx={idx}
                  activeSlide={activeSlide}
                  theme={theme}
                />
              ))}
            </Slider>
          </SliderWrapper>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default BasicSlider;
