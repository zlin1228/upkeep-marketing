import React from 'react';
import CallToAction from '../../CallToAction';
import { Container, Text, Buttons } from '../styles/SwitcherHeader.styled';

const SwitcherHeader = ({ component }) => (
  <Container className="switcher-header">
    <Text>
      <p className="heading-kicker">{component?.headingKicker}</p>
      <h2 className="heading">{component?.heading}</h2>
      <p className="subhead">{component?.subhead}</p>
    </Text>
    <Buttons>
      {component?.primaryCallToAction && (
        <CallToAction
          url={component?.primaryCallToAction?.url}
          label={component?.primaryCallToAction?.label}
          variant="Red"
          size="xl"
        />
      )}
      {component?.secondaryCallToAction && (
        <CallToAction
          url={component?.secondaryCallToAction?.url}
          label={component?.secondaryCallToAction?.label}
          variant="Red-Arrow-Link"
          icon="fa-solid fa-chevron-right"
        />
      )}
    </Buttons>
  </Container>
);

export default SwitcherHeader;
