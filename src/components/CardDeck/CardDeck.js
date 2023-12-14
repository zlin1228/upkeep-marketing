import React, { useRef } from 'react';
import { useLocation } from 'react-use';

import HeadingComponent from '../HeadingComponent/HeadingComponent';
import Card from '../Cards/Card';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  BackgroundImage,
  Wrapper,
  Heading,
  Grid,
} from '../../styles/Components/CardDeck/CardDeck';

const CardDeck = ({ component }) => {
  const backgroundRef = useRef(null);

  useParallaxEffect(backgroundRef);
  const { pathname } = useLocation();

  const {
    backgroundColor,
    showParallaxGrid,
    headingAlignment,
    headingKicker,
    heading,
    subhead,
    primaryButton,
    secondaryButton,
    card,
  } = component;

  return (
    <Section
      backgroundColor={backgroundColor}
      id={pathname?.includes('pricing') ? 'add-ons' : 'card-deck'}
    >
      {showParallaxGrid && (
        <BackgroundImage ref={backgroundRef} loading="lazy" />
      )}
      <Wrapper>
        <Heading>
          <HeadingComponent
            alignment={headingAlignment || 'center'}
            theme="light"
            headingKicker={headingKicker}
            heading={heading}
            subhead={subhead}
            primaryButton={primaryButton}
            primaryButtonVariant="Filled - Steel"
            secondaryButton={secondaryButton}
            secondaryButtonVariant="Outline - Steel"
            primaryNextIcon="fa-solid fa-chevron-right"
          />
        </Heading>
        <Grid className="card-deck-grid" cards={component?.card?.length}>
          {card?.map(c => (
            <Card key={c?.id} card={c} />
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default CardDeck;
