import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Controls from './components/Controls';
import TertiarySlide from './components/TertiarySlide';
import { tertiarySliderSettings } from './utils';
import { Section, Wrapper } from './styles/TertiarySlider.styled';

const TertiarySlider = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Section>
      <Wrapper>
        <h2>{component?.heading}</h2>
        <Slider
          ref={sliderRef}
          {...tertiarySliderSettings(setActiveSlideIndex)}
        >
          {component?.simpleTestimonials?.map(item => (
            <TertiarySlide key={item?.id} component={item} />
          ))}
        </Slider>
        <Controls
          slides={component?.simpleTestimonials}
          sliderRef={sliderRef}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default TertiarySlider;
