import React from 'react';
import CallToAction from '../../CallToAction';
import { Buttons, Button } from '../../../styles/Components/CardDeck/CardDeck';

const CardDeckButtons = ({ component }) => {
  if (!component?.primaryButton || !component?.secondaryButton) return null;
  return (
    <Buttons
      orientation={component?.buttonOrientation}
      layout={component?.headingLayout || '1 Column'}
    >
      {component?.primaryButton && (
        <CallToAction
          url={component?.primaryButton?.url}
          label={component?.primaryButton?.label}
          styles={Button}
          variant="Red"
        />
      )}
      {component?.secondaryButton && (
        <CallToAction
          url={component?.secondaryButton?.url}
          label={component?.secondaryButton?.label}
          styles={Button}
          variant="Red-Outlined"
        />
      )}
    </Buttons>
  );
};

export default CardDeckButtons;
