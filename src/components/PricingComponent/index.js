import React from 'react';

import CardDeckPricingComponent from './variants/CardDeck';
import DefaultPricingComponent from './variants/Default';

const PricingComponent = ({ component }) => {
  const { variant } = component;

  switch (variant) {
    case 'default':
      return <DefaultPricingComponent {...component} />;
    case 'card-deck':
      return <CardDeckPricingComponent {...component} />;
    default:
      return null;
  }
};

export default PricingComponent;
