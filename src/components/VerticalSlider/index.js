import React from 'react';

import VerticalSliderA from './variants/VerticalSlider-A';
import VerticalSliderB from './variants/VerticalSlider-B';

const VerticalSlider = ({ component }) => {
  const { variant } = component;

  switch (variant) {
    case 'vertical-slider-a':
      return <VerticalSliderA component={component} />;
    case 'vertical-slider-b':
      return <VerticalSliderB component={component} />;
    default:
      return <VerticalSliderA component={component} />;
  }
};

export default VerticalSlider;
