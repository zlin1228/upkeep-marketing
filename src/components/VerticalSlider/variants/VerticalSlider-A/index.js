import React from 'react';
import { useWindowSize } from 'react-use';

import Header from './components/Header';
import StickySection from './components/StickySection';
import StaticSection from './components/StaticSection';

import { Section } from './styles/index.styled';

const VerticalSlider = ({ component }) => {
  const { width } = useWindowSize();
  const noHeader = !component.heading;

  if (!component) return null;
  return (
    <Section noHeading={noHeader}>
      {component?.heading && <Header component={component} />}

      {width > 1170 && <StickySection component={component} />}
      {width <= 1170 && <StaticSection component={component} />}
    </Section>
  );
};

export default VerticalSlider;
