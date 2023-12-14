import React from 'react';
import shortid from 'shortid';
import { Container, Dot } from '../styles/ResourceHubControls.styled';

const HeroControls = ({ slides, sliderRef, activeSlideIndex }) => (
  <Container className="controls">
    {slides?.map((_, index) => (
      <Dot
        key={shortid.generate()}
        type="button"
        className={`${index === activeSlideIndex ? 'active' : ''} dot`}
        onClick={() => sliderRef.current.slickGoTo(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </Container>
);

export default HeroControls;
