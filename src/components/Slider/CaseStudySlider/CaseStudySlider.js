import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import useParallaxEffect from '../../../hooks/useParallaxEffect';
import {
  Section,
  BackgroundImage,
  Wrapper,
  Header,
  Heading,
  CtaStyles,
  SliderWrapper,
} from './styles/CaseStudySlider.styled';
import CallToAction from '../../CallToAction';
import Slide from './components/Slide';
import Controls from './components/Controls';
import { settings } from './utils/settings';

const CaseStudySlider = ({ component }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  if (!component) return null;
  const { theme, heading, primaryCta, slides } = component;

  return (
    <Section theme={theme}>
      <BackgroundImage ref={backgroundRef} theme={theme} loading="eager" />
      <Wrapper>
        {(heading || primaryCta?.url) && (
          <Header>
            {heading && <Heading>{heading}</Heading>}
            {primaryCta?.url && (
              <CallToAction
                url={primaryCta?.url}
                label={primaryCta?.label}
                nextIcon="fa-solid fa-chevron-right"
                variant="Link - Red"
                styles={CtaStyles}
              />
            )}
          </Header>
        )}
        {slides && slides.length > 0 ? (
          <SliderWrapper>
            <Slider ref={sliderRef} {...settings}>
              {slides?.map(slide => (
                <Slide key={slide?.id} component={slide} />
              ))}
            </Slider>
            <Controls
              slides={slides}
              sliderRef={sliderRef}
              activeSlideIndex={activeSlideIndex}
              setActiveSlideIndex={setActiveSlideIndex}
            />
          </SliderWrapper>
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default CaseStudySlider;
