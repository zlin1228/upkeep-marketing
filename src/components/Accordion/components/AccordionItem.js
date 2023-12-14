import React from 'react';

import AccordionToggle from './AccordionToggle';

import { Container, Text } from '../styles/AccordionItem.styled';

const handleAccordion = (index, state, setState) => {
  if (state === index) {
    setState(null);
  } else {
    setState(index);
  }
};

const AccordionItem = ({
  index,
  component,
  activeAccordion,
  setActiveAccordion,
}) => {
  const accordionActive = activeAccordion === index;

  return (
    <Container
      active={accordionActive}
      onClick={() =>
        handleAccordion(index, activeAccordion, setActiveAccordion)
      }
    >
      <AccordionToggle
        index={index}
        component={component}
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        handleAccordion={handleAccordion}
      />
      <Text
        className={accordionActive ? 'accordion-active' : ''}
        dangerouslySetInnerHTML={{ __html: component?.subhead }}
      />
    </Container>
  );
};

export default AccordionItem;
