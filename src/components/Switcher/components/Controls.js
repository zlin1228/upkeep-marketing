import React from 'react';
import { Controls } from '../styles/Controls';

export default ({ theme, slides, activeSlideIndex, handleSwitcher }) => (
  <Controls theme={theme}>
    {slides?.map((slide, index) => (
      <button
        key={slide.id}
        type="button"
        onClick={() => handleSwitcher(slide, index)}
        className={activeSlideIndex === index ? 'active' : ''}
      >
        <span>0{index + 1}</span>
        <p>{slide?.internalName}</p>
      </button>
    ))}
  </Controls>
);
