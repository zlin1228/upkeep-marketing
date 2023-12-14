import React from 'react';
import defaultSupportCards from './data/defaultSupportCards';
import SupportCard from '../Cards/SupportCard';
import {
  Section,
  Wrapper,
  CardsWrapper,
} from '../../styles/Components/CardDeck/SupportCardDeck';

const SupportCardDeck = ({ data, theme }) => {
  const cards = data?.supportCards || defaultSupportCards;
  return (
    <Section className="support_card_deck" theme={theme || 'light'}>
      <Wrapper theme={theme || 'light'}>
        <h2>{data?.heading || 'Get real support.'}</h2>
        <CardsWrapper>
          {cards.map(card => (
            <SupportCard key={card?.id} card={card} theme={theme || 'light'} />
          ))}
        </CardsWrapper>
      </Wrapper>
    </Section>
  );
};

export default SupportCardDeck;
