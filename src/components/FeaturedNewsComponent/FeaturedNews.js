import React, { useState, useRef } from 'react';
import ReactSlick from 'react-slick';
import Slide from './components/Slide';
import {
  Section,
  Wrapper,
  Header,
  Heading,
  Slider,
} from './styles/FeaturedNews';
import Controls from './components/Controls';
import CallToAction from '../CallToAction';

const sliderSettings = setActiveSlideIndex => ({
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  initialSlide: 0,
  variableWidth: true,
  dots: false,
  arrows: false,
  cssEase: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  afterChange(currentSlide) {
    setActiveSlideIndex(currentSlide);
  },
});

const FeaturedNews = ({ component }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Section>
      <Wrapper>
        <Header>
          <Heading>{component?.heading}</Heading>
          <CallToAction
            url={component?.callToAction?.url}
            label={component?.callToAction?.label}
            variant="Red-Arrow-Link"
            icon="fa-solid fa-chevron-right"
          />
        </Header>
        <Slider>
          <ReactSlick ref={sliderRef} {...sliderSettings(setActiveSlideIndex)}>
            {component?.news.map(slide => (
              <Slide key={slide?.id} component={slide} />
            ))}
          </ReactSlick>
        </Slider>
        <Controls
          sliderRef={sliderRef}
          activeSlide={activeSlideIndex}
          component={component}
        />
      </Wrapper>
    </Section>
  );
};

export default FeaturedNews;
