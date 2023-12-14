import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Section,
  Header,
  HeadingKicker,
  Heading,
  Subhead,
  Wrapper,
} from './styles/HorizontalSwitcher.styled';
import HorizontalControls from './components/HorizontalControls';
import HorizontalControlsMobile from './components/HorizontalControlsMobile';
import HorizontalSlide from './components/HorizontalSlide';

const HorizontalSwitcher = ({ component }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Section>
      <Header>
        <HeadingKicker>{component?.headingKicker}</HeadingKicker>
        <Heading>{component?.heading}</Heading>
        <Subhead>{component?.subhead}</Subhead>
      </Header>
      <Wrapper>
        <HorizontalControls
          component={component}
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
        />
        <HorizontalControlsMobile
          component={component}
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
        />
        {component?.horizontalSlide?.map((slide, idx) =>
          activeSlide === idx ? (
            <AnimatePresence key={slide?.id}>
              <HorizontalSlide slide={slide} />
            </AnimatePresence>
          ) : null
        )}
      </Wrapper>
    </Section>
  );
};

export default HorizontalSwitcher;
