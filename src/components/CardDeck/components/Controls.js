import React from 'react';
import shortid from 'shortid';
import Prev from '../assets/Prev';
import Next from '../assets/Next';
import { Container, Dot } from '../styles/Controls.styled';

const Controls = ({ slides, sliderRef, activeSlideIndex, infinite }) => (
  <Container className="controls">
    <Prev
      sliderRef={sliderRef}
      numOfSlides={slides?.length}
      activeSlideIndex={activeSlideIndex}
    />
    {!infinite && (
      <div className="dots">
        {slides?.map((_, index) => (
          <Dot
            key={shortid.generate()}
            type="button"
            aria-label="Carousel Pagination"
            className={`${index === activeSlideIndex ? 'active' : ''} dot`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          />
        ))}
      </div>
    )}
    <Next
      sliderRef={sliderRef}
      numOfSlides={slides?.length}
      activeSlideIndex={activeSlideIndex}
    />
  </Container>
);

export default Controls;
