import React from 'react';
import SupportCenterCardDeck from '../../CardDeck/SupportCenterCardDeck';
import { supportCenterCardDecks } from '../../../data/SupportCenter';

const SupportCenter = () => (
  <>
    {supportCenterCardDecks.map(cardDeck => (
      <SupportCenterCardDeck component={cardDeck} theme={cardDeck?.theme} />
    ))}
  </>
);

export default SupportCenter;
