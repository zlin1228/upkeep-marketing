import React from 'react';
import shortid from 'shortid';
import { ControlsWrapper, Dots, Dot } from '../styles/Controls';
import Prev from './Prev';
import Next from './Next';

const Controls = ({ slides, sliderRef, activeSlide }) => (
  <ControlsWrapper>
    <Prev
      sliderRef={sliderRef}
      numOfSlides={slides?.length}
      activeSlide={activeSlide}
    />
    <Dots>
      {slides?.map((_, index) => (
        <Dot
          key={shortid.generate()}
          onClick={() => sliderRef.current.slickGoTo(index)}
          index={index}
          activeSlide={activeSlide}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </Dots>
    <Next
      sliderRef={sliderRef}
      numOfSlides={slides?.length}
      activeSlide={activeSlide}
    />
  </ControlsWrapper>
);

export default Controls;
