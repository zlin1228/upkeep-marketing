import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/SwitcherHeader';
import Controls from './components/CardSwitcherControls';
import Slide from './components/CardSwitcherSlide';
import { Section, Wrapper, Container } from './styles/CardSwitcher.styled';

const CardSwitcher = ({ component }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slides = component?.cardSlide;

  return (
    <AnimatePresence mode="wait">
      <Section id="add-ons">
        <Wrapper>
          <Header component={component} />
          <Container>
            <Controls
              component={slides}
              activeSlideIndex={activeSlideIndex}
              setActiveSlideIndex={setActiveSlideIndex}
            />
            <Slide
              key={slides[activeSlideIndex]?.id}
              component={slides[activeSlideIndex]}
            />
          </Container>
        </Wrapper>
      </Section>
    </AnimatePresence>
  );
};

export default CardSwitcher;
