import React from 'react';
import shortid from 'shortid';
import { Wrapper, Dot } from '../styles/Controls.styled';
import Prev from './Prev';
import Next from './Next';

const Controls = ({ items, sliderRef, activeSlideIndex }) => (
  <Wrapper>
    <Prev
      sliderRef={sliderRef}
      numOfSlides={items?.length}
      activeSlide={activeSlideIndex}
    />
    {items.map((item, idx) => (
      <Dot
        key={shortid()}
        id={idx}
        className={activeSlideIndex === idx ? 'active' : ''}
        onClick={() => sliderRef.current.slickGoTo(idx)}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
    <Next
      sliderRef={sliderRef}
      numOfSlides={items?.length}
      activeSlide={activeSlideIndex}
    />
  </Wrapper>
);

export default Controls;
