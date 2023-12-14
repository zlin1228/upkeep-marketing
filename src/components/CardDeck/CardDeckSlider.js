import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import Header from './components/Header';
import Slide from './components/Slide';
import Controls from './components/Controls';
import { sliderSettings } from './utils/sliderUtils';
import { Section, Wrapper } from './styles/index.styled';

const CardDeckSlider = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Section>
      <Header component={component} />
      <Wrapper infinite={component?.infiniteSlider}>
        <Slider
          ref={sliderRef}
          {...sliderSettings(setActiveSlideIndex, component?.infiniteSlider)}
        >
          {component?.card?.map(item => (
            <Slide key={shortid.generate()} component={item} />
          ))}
        </Slider>
        <Controls
          sliderRef={sliderRef}
          infinite={component?.infiniteSlider}
          slides={component?.card}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default CardDeckSlider;
