import React, { useState } from 'react';

import Controls from './components/Controls';
import Heading from './components/Heading';
import Sliders from './components/Sliders';

import { Section, Container, OuterWrapper } from './styles/index.styled';

const LearningCenterCardDeck = ({ component }) => {
  const { cardDecks } = component;
  const [activeCardDeck, setActiveCardDeck] = useState(cardDecks[0]);

  return (
    <Section>
      <OuterWrapper>
        <Heading {...component} />
        <Container>
          <Controls
            cardDecks={cardDecks}
            activeCardDeck={activeCardDeck}
            setActiveCardDeck={setActiveCardDeck}
          />
          <Sliders activeCardDeck={activeCardDeck} />
        </Container>
      </OuterWrapper>
    </Section>
  );
};

export default LearningCenterCardDeck;
