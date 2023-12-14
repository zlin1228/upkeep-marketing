import React from 'react';
import { color } from '../../../atoms/colors';
import Icon from '../../../molecules/Icon';
import { Button } from '../styles/AccordionToggle.styled';

const AccordionToggle = ({
  index,
  component,
  activeAccordion,
  setActiveAccordion,
  handleAccordion,
}) => (
  <Button
    type="button"
    aria-label={component?.heading}
    className={activeAccordion === index ? 'accordion-active' : ''}
    onClick={() => handleAccordion(index, activeAccordion, setActiveAccordion)}
  >
    <span>{component?.heading}</span>
    <span className="accordion-icon">
      <span className="accordion-icon">
        <Icon
          id="fa-solid fa-chevron-down"
          width="16px"
          height="16px"
          fillColor={color.darkBlue[900]}
        />
      </span>
    </span>
  </Button>
);

export default AccordionToggle;
