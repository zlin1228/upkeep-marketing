import React from 'react';
import { handlePrev } from '../utils/controls';
import { Button } from '../styles/Controls.styled';
import Icon from '../../../molecules/Icon';

const Prev = ({ sliderRef, numOfSlides, activeSlide }) => (
  <Button
    className="prev"
    type="button"
    onClick={() => handlePrev(sliderRef, activeSlide, numOfSlides)}
    aria-label="Previous slide"
  >
    <Icon id="fa-regular fa-arrow-left" width="16px" height="16px" />
  </Button>
);

export default Prev;
