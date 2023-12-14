import React from 'react';
import {
  Section,
  Wrapper,
  Content,
  Card,
  Clickable,
  CallToAction,
} from '../../../styles/Components/ConversionPanel/EdgeConversionPanel';

const ConversionPanel = ({ component }) => (
  <Section>
    <Wrapper theme={component?.theme}>
      <Card theme={component?.theme}>
        <Clickable
          to={component?.callToAction?.url.replace(
            'https://www.onupkeep.com',
            ''
          )}
        />
        <Content theme={component?.theme}>
          <h5>{component?.headingKicker}</h5>
          <h2>{component?.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: component?.subhead }} />
          <CallToAction
            theme={component?.theme}
            className="animated-link"
            to={component?.callToAction?.url.replace(
              'https://www.onupkeep.com',
              ''
            )}
          >
            {component?.callToAction?.label}
          </CallToAction>
        </Content>
      </Card>
    </Wrapper>
  </Section>
);

export default ConversionPanel;
