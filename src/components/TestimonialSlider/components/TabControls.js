import React from 'react';
import { Section, Wrapper, Button } from '../styles/TabControls.styled';

const TabControls = ({
  theme,
  slides,
  sliderRef,
  activeSlideIndex,
  setActiveSlideIndex,
}) => (
  <Section>
    <Wrapper>
      {slides?.map((slide, index) => (
        <Button
          key={slide?.id}
          className={`${index === activeSlideIndex ? 'selected' : ''} tab`}
          onClick={() => {
            setActiveSlideIndex(index);
            sliderRef.current.slickGoTo(index);
          }}
          aria-label={`Go to slide ${index + 1}`}
          theme={theme}
        >
          {slide?.person?.company || slide?.person?.firstName}
        </Button>
      ))}
    </Wrapper>
  </Section>
);

export default TabControls;
