import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import Slider from 'react-slick';
import CallToAction from '../../CallToAction';
import {
  Section,
  Kicker,
  HeaderWrapper,
  Heading,
  Subhead,
  Buttons,
  SliderWrapper,
} from './styles/Slider.styled';
import Slide from './components/Slide';
import useMobile from './utils/useMobile';
import Controls from './components/Controls';

const SliderComponent = ({ component }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const mobileActive = useMobile();
  const sliderRef = useRef();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    afterChange(currentSlide) {
      setActiveSlide(currentSlide);
    },
    responsive: [
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
        },
      },
    ],
  };
  return (
    <Section>
      <HeaderWrapper>
        {component.headingKicker && <Kicker>{component.headingKicker}</Kicker>}
        {component.heading && <Heading>{component.heading}</Heading>}
        {component?.subhead && (
          <Subhead dangerouslySetInnerHTML={{ __html: component?.subhead }} />
        )}
        {(component?.primaryCta || component?.secondaryCta) && (
          <Buttons>
            {component?.primaryCta && (
              <CallToAction
                url={component?.primaryCta?.url}
                label={component?.primaryCta?.label}
                variant="Red"
                size="xl"
              />
            )}
            {component?.secondaryCta && (
              <CallToAction
                url={component?.secondaryCta?.url}
                label={component?.secondaryCta?.label}
                variant="Red-Outlined"
                size="xl"
              />
            )}
          </Buttons>
        )}
      </HeaderWrapper>
      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {component?.slides.map((slide, index) => (
            <Slide
              key={shortid.generate()}
              component={slide}
              activeSlide={activeSlide}
              index={index}
              mobileActive={mobileActive}
            />
          ))}
        </Slider>
        <Controls
          sliderRef={sliderRef}
          slides={component?.slides}
          activeSlide={activeSlide}
        />
      </SliderWrapper>
    </Section>
  );
};

export default SliderComponent;
