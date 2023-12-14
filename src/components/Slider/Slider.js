import React from 'react';

import FeaturedSlider from './FeaturedSlider/FeaturedSlider';
import BasicSlider from './BasicSlider/BasicSlider';
import CaseStudySlider from './CaseStudySlider/CaseStudySlider';
import LogoSlider from './LogoSlider';

const Slider = ({ component }) => {
  switch (component?.variant) {
    case 'feature':
      return <FeaturedSlider component={component} />;
    case 'basic':
      return <BasicSlider component={component} />;
    case 'case-study':
      return <CaseStudySlider component={component} />;
    case 'logo':
      return <LogoSlider component={component} />;
    default:
      return null;
  }
};

export default Slider;
