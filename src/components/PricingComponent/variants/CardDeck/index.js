import React from 'react';

import Header from './components/Header';
import Card from './components/Card';

import { Grid, OuterWrapper, Section } from './styles/index.styled';

const PricingComponent = ({
  headingKicker,
  heading,
  subhead,
  headerCard,
  pricingCards,
}) => (
  <Section>
    <OuterWrapper>
      {(headingKicker || heading || subhead || headerCard) && (
        <Header
          headingKicker={headingKicker}
          heading={heading}
          subhead={subhead}
          card={headerCard}
        />
      )}
      {pricingCards && pricingCards.length > 0 && (
        <Grid numOfCards={pricingCards.length}>
          {pricingCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </Grid>
      )}
    </OuterWrapper>
  </Section>
);

export default PricingComponent;
