import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import StackSlide from './components/Slide';
import Controls from './components/Controls';
import fetchAnimation from '../Lottie/utils/fetchAnimation';
import {
  Section,
  Wrapper,
  Details,
  Text,
  HeadingKicker,
  Heading,
  Subhead,
  Divider,
} from './styles/Switcher';

const StackSwitcher = ({ component }) => {
  const [animation, setAnimation] = useState();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(component?.switcherSlide[0]);

  useEffect(() => {
    if (component?.switcherSlide[0]?.showLottieAnimation) {
      fetchAnimation(
        component?.switcherSlide[0]?.lottieAnimation?.url,
        setAnimation
      );
    }
  }, []);

  useEffect(() => {
    setActiveSlide(component?.switcherSlide[activeSlideIndex]);
  }, [activeSlideIndex, component?.switcherSlide]);

  const handleSwitcher = (slide, index) => {
    if (slide.showLottieAnimation) {
      fetchAnimation(slide?.lottieAnimation?.url, setAnimation);
    }
    setActiveSlideIndex(index);
  };

  return (
    <Section theme={component?.theme}>
      <AnimatePresence initial>
        <Wrapper>
          <Details>
            <Text>
              {component?.headingKicker && (
                <HeadingKicker>{component?.headingKicker}</HeadingKicker>
              )}
              {component?.heading && (
                <Heading theme={component?.theme}>{component?.heading}</Heading>
              )}
              {component?.subhead && (
                <Subhead
                  dangerouslySetInnerHTML={{ __html: component?.subhead }}
                />
              )}
              <Divider theme={component?.theme} />
            </Text>
            <Controls
              theme={component?.theme}
              slides={component?.switcherSlide}
              activeSlideIndex={activeSlideIndex}
              handleSwitcher={handleSwitcher}
            />
          </Details>
          <StackSlide
            key={activeSlide?.id}
            theme={component?.theme}
            slide={activeSlide}
            animation={animation}
          />
        </Wrapper>
      </AnimatePresence>
    </Section>
  );
};

export default StackSwitcher;
