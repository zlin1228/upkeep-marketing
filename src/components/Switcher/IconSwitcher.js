import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GatsbyImage from '../Image/GatsbyImage';
import SwitcherHeader from './components/SwitcherHeader';
import IconSwitcherControls from './components/IconSwitcherControls';
import { Section, Wrapper, Container } from './styles/IconSwitcher.styled';

const IconSwitcher = ({ component }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Section>
      <Wrapper>
        <SwitcherHeader component={component} />
        <Container reverse={component?.reverse}>
          <IconSwitcherControls
            slides={component?.iconSlide}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
          {component?.iconSlide?.map((slide, index) =>
            activeSlide === index ? (
              <AnimatePresence key={slide?.id}>
                <motion.div
                  className="switcher-slide"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <GatsbyImage
                    src={slide?.image?.image?.gatsbyImageData}
                    alt={slide?.image?.image?.alt}
                  />
                </motion.div>
              </AnimatePresence>
            ) : null
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default IconSwitcher;
