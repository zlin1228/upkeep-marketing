import React from 'react';
import { handleNext } from '../utils/controls';
import { Button } from '../styles/Controls.styled';
import Icon from '../../../molecules/Icon';

const Next = ({ sliderRef, numOfSlides, activeSlide }) => (
  <Button
    className="next"
    type="button"
    onClick={() => handleNext(sliderRef, activeSlide, numOfSlides)}
    aria-label="Next slide"
  >
    <Icon id="fa-regular fa-arrow-right" width="16px" height="16px" />
  </Button>
);

export default Next;
