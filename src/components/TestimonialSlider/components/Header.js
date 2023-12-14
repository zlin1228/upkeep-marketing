import React from 'react';
import CallToAction from '../../CallToAction';
import { Container, Buttons } from '../styles/Header.styled';

const Header = ({ component, variant }) => (
  <Container variant={variant}>
    <p className="kicker">{component?.headingKicker}</p>
    <h2 className="heading">{component?.heading}</h2>
    <p className="subhead">{component?.subhead}</p>
    <Buttons>
      <CallToAction
        variant="Red"
        classes="button"
        url={component?.primaryButton?.url}
        label={component?.primaryButton?.label}
        size="xxl"
      />
      <CallToAction
        variant="Red-Outlined"
        classes="button"
        url={component?.secondaryButton?.url}
        label={component?.secondaryButton?.label}
        size="xxl"
      />
    </Buttons>
  </Container>
);

export default Header;
