import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import {
  Section,
  Wrapper,
  Heading,
  HeadingKicker,
  Subhead,
  SliderWrapper,
} from './styles/Callout.styled';
import Slide from './components/Slide';
import Controls from './components/Controls';
import { sliderSettings } from './utils/sliderSettings';

const Callout = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Section background={component?.backgroundColor}>
      <Wrapper>
        {component?.headingKicker && (
          <HeadingKicker>{component?.headingKicker}</HeadingKicker>
        )}
        {component?.heading && <Heading>{component?.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
        <SliderWrapper>
          <Slider
            ref={sliderRef}
            {...sliderSettings(setActiveSlideIndex, false)}
          >
            {component?.calloutItems?.map(item => (
              <Slide key={shortid.generate()} component={item} />
            ))}
          </Slider>
        </SliderWrapper>
        <Controls
          items={component?.calloutItems}
          sliderRef={sliderRef}
          activeSlideIndex={activeSlideIndex}
        />
      </Wrapper>
    </Section>
  );
};

export default Callout;
