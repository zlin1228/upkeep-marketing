import React from 'react';
import RedBackground from '../assets/red-background.svg';
import CallToAction from '../../CallToAction';
import {
  Section,
  Background,
  Wrapper,
  Container,
  Frame,
  Buttons,
} from '../styles/SecondaryConversionPanel.styled';

const SecondaryConversionPanel = ({ component }) => (
  <Section>
    <Background src={RedBackground} alt="background" />
    <Wrapper>
      <Container>
        <Frame>
          <h2 className="heading">
            {component?.heading || 'Sign up for a personalized tour today.'}
          </h2>
          <p className="subhead">
            {component?.subhead || 'Start for free. Upgrade any time.'}
          </p>
          <Buttons>
            <CallToAction
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
              classes="primary"
            />
            <CallToAction
              url={component?.secondaryButton?.url || '/free-trial-signup'}
              label={component?.secondaryButton?.label || 'Free Trial Signup'}
              classes="secondary"
            />
          </Buttons>
          <p className="disclaimer">
            {component?.fallbackText ||
              `Information is 100% secure, shouldn't take more than 15-45 minutes.`}
          </p>
        </Frame>
      </Container>
    </Wrapper>
  </Section>
);

export default SecondaryConversionPanel;
