import React from 'react';
import shortid from 'shortid';
import {
  ControlsWrapper,
  PaginationWrapper,
  PaginationItem,
  ButtonsWrapper,
  Pre,
  Next,
} from '../styles/Controls';

const Controls = ({ component, sliderRef, activeSlide }) => {
  return (
    <ControlsWrapper>
      <PaginationWrapper>
        {component?.news.map((slide, index) => (
          <PaginationItem
            id={index}
            active={activeSlide}
            key={shortid.generate()}
          />
        ))}
      </PaginationWrapper>
      <ButtonsWrapper>
        <Pre
          active={activeSlide}
          totalSlides={component?.news?.length}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="31.5"
              y="31.5"
              width="31"
              height="31"
              rx="15.5"
              transform="rotate(-180 31.5 31.5)"
              stroke="none"
            />
            <path
              d="M9.43431 15.4343C9.12189 15.7467 9.12189 16.2533 9.43431 16.5657L14.5255 21.6569C14.8379 21.9693 15.3444 21.9693 15.6569 21.6569C15.9693 21.3444 15.9693 20.8379 15.6569 20.5255L11.1314 16L15.6569 11.4745C15.9693 11.1621 15.9693 10.6556 15.6569 10.3431C15.3444 10.0307 14.8379 10.0307 14.5255 10.3431L9.43431 15.4343ZM22 15.2L10 15.2L10 16.8L22 16.8L22 15.2Z"
              fill="none"
            />
          </svg>
        </Pre>
        <Next
          active={activeSlide}
          totalSlides={component?.news?.length}
          onClick={() => sliderRef.current.slickNext()}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="none"
            />
            <path
              d="M22.5657 16.5657C22.8781 16.2533 22.8781 15.7467 22.5657 15.4343L17.4745 10.3431C17.1621 10.0307 16.6556 10.0307 16.3431 10.3431C16.0307 10.6556 16.0307 11.1621 16.3431 11.4745L20.8686 16L16.3431 20.5255C16.0307 20.8379 16.0307 21.3444 16.3431 21.6569C16.6556 21.9693 17.1621 21.9693 17.4745 21.6569L22.5657 16.5657ZM10 16.8L22 16.8L22 15.2L10 15.2L10 16.8Z"
              fill="none"
            />
          </svg>
        </Next>
      </ButtonsWrapper>
    </ControlsWrapper>
  );
};

export default Controls;
