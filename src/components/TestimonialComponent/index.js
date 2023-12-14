import React from 'react';

import TestimonialCarousel from './TestimonialCarousel';
import TestimonialGrid from './TestimonialGrid';
import TestimonialVideo from './TestimonialVideo';

const TestimonialGenerator = ({ component }) => {
  if (component?.layout === 'Carousel') {
    return <TestimonialCarousel component={component} />;
  }
  if (component?.layout === 'Grid') {
    return <TestimonialGrid component={component} />;
  }
  if (component?.layout === 'Video') {
    return <TestimonialVideo component={component} />;
  }
  return null;
};

export default TestimonialGenerator;
