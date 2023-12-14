import React from 'react';
import CallToAction from '../../CallToAction';
import { Container, Buttons } from '../styles/Header.styled';

const Header = ({ component }) => (
  <Container>
    <h5 className="kicker">{component?.headingKicker}</h5>
    <h2 className="heading">{component?.heading}</h2>
    <p
      className="subhead"
      dangerouslySetInnerHTML={{ __html: component?.subhead }}
    />
    <Buttons>
      <CallToAction
        variant="Primary"
        classes="button"
        url={component?.primaryButton?.url}
        label={component?.primaryButton?.label}
      />
      <CallToAction
        variant="Secondary"
        classes="button"
        url={component?.secondaryButton?.url}
        label={component?.secondaryButton?.label}
      />
    </Buttons>
  </Container>
);

export default Header;
