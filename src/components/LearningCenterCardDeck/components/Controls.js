import React from 'react';

import { Button, Container, Wrapper } from '../styles/Controls.styled';

const Controls = ({ cardDecks, activeCardDeck, setActiveCardDeck }) => {
  if (!cardDecks.length) return null;

  return (
    <Container>
      <Wrapper>
        {cardDecks?.map(deck => (
          <Button
            key={deck?.id}
            className={activeCardDeck?.id === deck?.id ? 'active' : ''}
            onClick={() => setActiveCardDeck(deck)}
          >
            {deck?.label}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Controls;
