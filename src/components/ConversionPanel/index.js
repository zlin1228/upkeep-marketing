import React from 'react';

import PrimaryConversionPanel from './variants/PrimaryConverionPanel';
import SecondaryConversionPanel from './variants/SecondaryConversionPanel';
import TertiaryConversionPanel from './variants/TertiaryConversionPanel';
import FormConversionPanel from './variants/FormConversionPanel';
import FloatingConversionPanel from './variants/FloatingConversionPanel';

const ConversionPanel = ({ component, location }) => {
  switch (component?.variant) {
    case 'primary':
      return <PrimaryConversionPanel component={component} />;
    case 'secondary':
      return <SecondaryConversionPanel component={component} />;
    case 'tertiary':
      return <TertiaryConversionPanel component={component} />;
    case 'demo':
      return <FormConversionPanel component={component} location={location} />;
    case 'floating':
      return <FloatingConversionPanel component={component} />;
    default:
      return null;
  }
};

export default ConversionPanel;
