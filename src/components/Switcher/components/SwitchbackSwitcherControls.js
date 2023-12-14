import React from 'react';
import shortid from 'shortid';
import Next from '../assets/Next';
import Prev from '../assets/Prev';
import {
  Wrapper,
  Controls,
  Pagination,
  PaginationLine,
  Numbers,
} from '../styles/SwitchbackSwitcherControls.styled';

const SwitchbackSwitcherControls = ({
  slides,
  imgSliderRef,
  reverse,
  detailsSliderRef,
  activeSlideIndex,
  setActiveSlideIndex,
}) => (
  <Wrapper reverse={reverse}>
    <Controls reverse={reverse}>
      <div className="button-wrapper">
        <Prev imgSliderRef={imgSliderRef} detailsSliderRef={detailsSliderRef} />
        <Next imgSliderRef={imgSliderRef} detailsSliderRef={detailsSliderRef} />
      </div>
    </Controls>
    <Pagination reverse={reverse}>
      {slides.map((slide, index) => (
        <PaginationLine
          key={shortid.generate()}
          onClick={() => {
            imgSliderRef.current?.slickGoTo(index);
            detailsSliderRef.current?.slickGoTo(index);
            setActiveSlideIndex(index);
          }}
          active={activeSlideIndex === index}
        />
      ))}
      <Numbers>{`${activeSlideIndex + 1}/${slides?.length}`}</Numbers>
    </Pagination>
  </Wrapper>
);

export default SwitchbackSwitcherControls;
