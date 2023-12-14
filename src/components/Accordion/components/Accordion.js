import React, { useState } from 'react';

import AccordionItem from './AccordionItem';
import { Container } from '../styles/index.styled';

const Accordion = ({ component }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <Container>
      {component?.accordion?.map((accordion, index) => (
        <AccordionItem
          key={accordion?.id}
          index={index}
          component={accordion}
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        />
      ))}
    </Container>
  );
};

export default Accordion;
