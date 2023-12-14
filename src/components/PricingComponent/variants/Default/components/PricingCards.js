import React from 'react';

import PricingCard from './PricingCard';

import { Container } from '../styles/PricingCards.styled';

const PricingCards = ({ cards }) => {
  if (!cards || cards?.length === 0) {
    return null;
  }

  return (
    <Container numOfCards={cards?.length}>
      {cards?.map((card, index) => (
        <PricingCard key={card?.id} index={index} card={card} />
      ))}
    </Container>
  );
};

export default PricingCards;
