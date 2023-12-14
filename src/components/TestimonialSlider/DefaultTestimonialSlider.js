import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import Header from './components/Header';
import Slide from './components/Slide';
import Controls from './components/Controls';
import { sliderSettings } from './utils';
import { Section, Wrapper } from './styles/index.styled';

const DefaultTestimonialSlider = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Section>
      <Header component={component} />
      <Wrapper>
        <Slider ref={sliderRef} {...sliderSettings(setActiveSlideIndex)}>
          {component?.testimonials?.map(item => (
            <Slide key={shortid.generate()} component={item} />
          ))}
        </Slider>
        <Controls
          sliderRef={sliderRef}
          slides={component?.testimonials}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default DefaultTestimonialSlider;
