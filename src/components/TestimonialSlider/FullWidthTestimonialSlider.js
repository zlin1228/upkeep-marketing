import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
import Header from './components/Header';
import FullWidthSlide from './components/FullWidthSlide';
import TabControls from './components/TabControls';
import { fullWidthSliderSettings } from './utils';
import {
  Section,
  BackgroundImage,
  Wrapper,
  SliderWrapper,
  HeaderWrapper,
  SocialProofWrapper,
} from './styles/FullWidthTestimonialSlider.styled';
import useParallaxEffect from '../../hooks/useParallaxEffect';
import SocialProof from '../SocialProof';

const FullWidthTestimonialSlider = ({ component }) => {
  const sliderRef = useRef(null);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Section
      bgColor={component?.backgroundColor}
      showSocialProof={component?.showSocialProof}
      showGrid={component?.showBackgroundGrid}
    >
      {component?.backgroundColor === 'white' ||
      component?.backgroundColor === 'DarkBlue/25' ? (
        <BackgroundImage
          ref={backgroundRef}
          bgColor={component?.backgroundColor}
          loading="eager"
        />
      ) : null}
      <Wrapper>
        <HeaderWrapper>
          {(component?.heading || component?.subhead) && (
            <Header component={component} variant={component?.variant} />
          )}
          {component?.showSocialProof && (
            <SocialProofWrapper>
              <SocialProof component={component?.testimonialSocialProof} />
            </SocialProofWrapper>
          )}
        </HeaderWrapper>
        <SliderWrapper>
          <Slider
            ref={sliderRef}
            {...fullWidthSliderSettings(setActiveSlideIndex)}
          >
            {component?.fullWidthTestimonials?.map(item => (
              <FullWidthSlide
                key={shortid.generate()}
                component={item}
                theme={component?.backgroundColor}
              />
            ))}
          </Slider>
          <TabControls
            sliderRef={sliderRef}
            slides={component?.fullWidthTestimonials}
            activeSlideIndex={activeSlideIndex}
            setActiveSlideIndex={setActiveSlideIndex}
            theme={component?.backgroundColor}
          />
        </SliderWrapper>
      </Wrapper>
    </Section>
  );
};

export default FullWidthTestimonialSlider;
