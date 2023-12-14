import React from 'react';
import CallToAction from '../../CallToAction';
import {
  Section,
  Wrapper,
  Frame,
  Content,
  Buttons,
} from '../styles/TertiaryConversionPanel.styled';

const TertiaryConversionPanel = ({ component }) => (
  <Section>
    <Wrapper>
      <Frame>
        <Content>
          {component?.heading && (
            <h2 className="heading">{component?.heading}</h2>
          )}
          {component?.subhead && (
            <p className="subhead">{component?.subhead}</p>
          )}
          <Buttons>
            <CallToAction
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
              variant="Red"
            />
            <CallToAction
              url={component?.secondaryButton?.url}
              label={component?.secondaryButton?.label}
              variant="Red-Outlined"
            />
          </Buttons>
          {component?.fallbackText && (
            <p className="disclaimer">{component?.fallbackText}</p>
          )}
        </Content>
      </Frame>
    </Wrapper>
  </Section>
);

export default TertiaryConversionPanel;
