import React from 'react';

import CardDeck from './CardDeck';
import CardDeckSlider from './CardDeckSlider';
import CardDeckIndustriesSlider from './CardDeckIndustriesSlider';
import CardDeckSwitchback from './CardDeckSwitchback';

const CardDeckGenerator = ({ component, slug }) => {
  switch (component?.variant) {
    case 'slider': {
      return <CardDeckSlider component={component} slug={slug} />;
    }
    case 'industries-slider': {
      return <CardDeckIndustriesSlider component={component} slug={slug} />;
    }
    case 'switchback-card-deck': {
      return <CardDeckSwitchback component={component} slug={slug} />;
    }
    default: {
      return <CardDeck component={component} slug={slug} />;
    }
  }
};

export default CardDeckGenerator;
