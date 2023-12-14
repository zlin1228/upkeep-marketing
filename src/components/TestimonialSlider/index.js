import React from 'react';

import DefaultTestimonialSlider from './DefaultTestimonialSlider';
import FullWidthTestimonialSlider from './FullWidthTestimonialSlider';
import TertiarySlider from './TertiarySlider';

const TestimonialSlider = ({ component }) => {
  if (component?.variant === 'primary') {
    return <DefaultTestimonialSlider component={component} />;
  }
  if (component?.variant === 'secondary') {
    return <FullWidthTestimonialSlider component={component} />;
  }
  if (component?.variant === 'tertiary') {
    return <TertiarySlider component={component} />;
  }
  return null;
};

export default TestimonialSlider;
