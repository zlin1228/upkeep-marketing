import React from 'react';

import DefaultSocialProof from './variants/SocialProof';
import FloatingSocialProof from './variants/FloatingSocialProof';

const SocialProof = ({ component }) => {
  switch (component?.variant) {
    case 'floating':
      return <FloatingSocialProof {...component} />;
    default:
      return <DefaultSocialProof component={component} />;
  }
};

export default SocialProof;
