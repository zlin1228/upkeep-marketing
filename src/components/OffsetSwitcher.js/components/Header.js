import React from 'react';
import CallToAction from '../../CallToAction';
import { Container, Buttons } from '../styles/Header.styled';

const Header = ({ component }) => {
  if (!component?.headingKicker && !component?.heading && component?.subhead) {
    return null;
  }
  return (
    <Container>
      {component?.headingKicker && (
        <h5 className="kicker">{component?.headingKicker}</h5>
      )}
      {component?.heading && <h2 className="heading">{component?.heading}</h2>}
      {component?.subhead && <p className="subhead">{component?.subhead}</p>}
      {component?.primaryButton || component?.secondaryButton ? (
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
      ) : null}
    </Container>
  );
};

export default Header;
