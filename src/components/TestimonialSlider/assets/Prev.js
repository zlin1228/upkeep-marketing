import React from 'react';
import { handlePrev } from '../utils';
import { Button } from '../styles/Controls.styled';

const Prev = ({ sliderRef, numOfSlides, activeSlideIndex }) => (
  <Button
    className="prev"
    type="button"
    aria-label="Previous slide"
    onClick={() => handlePrev(sliderRef, activeSlideIndex, numOfSlides)}
  >
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.43431 16.0808C9.12189 16.3932 9.12189 16.8997 9.43431 17.2122L14.5255 22.3033C14.8379 22.6158 15.3444 22.6158 15.6569 22.3033C15.9693 21.9909 15.9693 21.4844 15.6569 21.172L11.1314 16.6465L15.6569 12.121C15.9693 11.8086 15.9693 11.302 15.6569 10.9896C15.3444 10.6772 14.8379 10.6772 14.5255 10.9896L9.43431 16.0808ZM22 15.8465L10 15.8465L10 17.4465L22 17.4465L22 15.8465Z"
        fill="#33394B"
      />
      <rect
        x="31.5"
        y="32.1465"
        width="31"
        height="31"
        rx="15.5"
        transform="rotate(-180 31.5 32.1465)"
        stroke="#33394B"
      />
    </svg>
  </Button>
);

export default Prev;
