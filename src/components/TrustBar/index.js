import React from 'react';

import TrustBarFloating from './variants/TrustBarFloating';
import TrustBarMultiline from './variants/TrustBarMultiline';
import TrustBarScrolling from './variants/TrustbarScrolling';
import TrustBarStandard from './variants/TrustBarStandard';
import TrustBarTestimonial from './variants/TrustBarTestimonial';

/**
 * Variants
 * - default
 * - scrolling
 * - floating
 * - multi-scroll
 * - testimonial
 */

const TrustBar = ({ component }) => {
  const variant = component?.variant;

  switch (variant) {
    case 'default':
      return <TrustBarStandard component={component} />;
    case 'scrolling':
      return <TrustBarScrolling component={component} />;
    case 'floating':
      return <TrustBarFloating component={component} />;
    case 'multi-scroll':
      return <TrustBarMultiline component={component} />;
    case 'testimonial':
      return <TrustBarTestimonial component={component} />;
    default:
      return <TrustBarStandard component={component} />;
  }
};

export default TrustBar;
