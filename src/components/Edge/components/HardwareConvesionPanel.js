import { Link } from 'gatsby';
import React from 'react';
import { Section, Wrapper, Card } from '../styles/HardwareConversionPanel';

const HardwareConversionPanel = ({ component }) => (
  <Section>
    <Wrapper>
      <Card>
        <h2>Get the new UpKeep Edge {component?.title}</h2>
        <Link to={component?.callToAction?.url}>
          {component?.callToAction?.label}
        </Link>
      </Card>
    </Wrapper>
  </Section>
);

export default HardwareConversionPanel;
