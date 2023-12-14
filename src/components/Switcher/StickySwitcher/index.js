import React, { useEffect, useState } from 'react';

import HeadingComponent from '../../HeadingComponent/HeadingComponent';
import Controls from './components/Controls';
import Slide from './components/Slide';

import { scrollToControl } from './utils/helpers';

import { Section, Slides } from './styles/index.styled';

const StickySwitcher = ({
  component: {
    theme,
    headingKicker,
    heading,
    subhead,
    primaryCallToAction,
    secondaryCallToAction,
    slides,
  },
}) => {
  const [activeSlide, setActiveSlide] = useState(null);

  useEffect(() => {
    scrollToControl(`control-${activeSlide}`);
  }, [activeSlide]);

  return (
    <Section theme={theme}>
      <HeadingComponent
        headingKicker={headingKicker}
        theme={theme.toLowerCase()}
        heading={heading}
        subhead={subhead}
        primaryButton={primaryCallToAction}
        secondaryButton={secondaryCallToAction}
      />
      <Controls
        theme={theme}
        slides={slides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <Slides>
        {slides?.map((slide, idx) => (
          <Slide
            key={slide.id}
            idx={idx}
            setActiveSlide={setActiveSlide}
            theme={theme}
            {...slide}
          />
        ))}
      </Slides>
    </Section>
  );
};

export default StickySwitcher;
