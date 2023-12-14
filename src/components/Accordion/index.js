import React, { useRef } from 'react';

import AccordionHeading from './components/AccordionHeading';
import Accordion from './components/Accordion';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import { BackgroundImage, Section, Wrapper } from './styles/index.styled';

const AccordionComponent = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  const type = component.layout === 'Split' ? 'split' : 'stack';

  return (
    <Section>
      {component?.showParallaxGrid && (
        <BackgroundImage
          ref={backgroundRef}
          className="background-image"
          loading="eager"
        />
      )}
      <Wrapper type={type}>
        <AccordionHeading type={type} component={component} />
        <Accordion component={component} />
      </Wrapper>
    </Section>
  );
};
export default AccordionComponent;
