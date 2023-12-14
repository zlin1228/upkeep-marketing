import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import {
  Section,
  Wrapper,
  GradientBackground,
  ContentLeft,
  ContentRight,
  Heading,
  Subhead,
  PrimaryButton,
} from './styles/EdgeSwitchback';

const EdgeSwitchback = ({ component }) => (
  <Section theme={component?.backgroundColor}>
    <GradientBackground reverse={component?.reverse} />
    <Wrapper reverse={component?.reverse}>
      <ContentLeft>
        <GatsbyImage
          src={component?.featuredContent?.image?.gatsbyImageData}
          alt={component?.featuredContent?.image?.alt}
        />
      </ContentLeft>
      <ContentRight>
        {component?.heading && (
          <Heading
            theme={component?.backgroundColor}
            dangerouslySetInnerHTML={{ __html: component?.heading }}
          />
        )}
        {component?.subhead && (
          <Subhead
            theme={component?.backgroundColor}
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        )}
        {component?.callToAction && (
          <CallToAction
            url={component?.callToAction?.url}
            label={component?.callToAction?.label}
            styles={PrimaryButton}
          />
        )}
      </ContentRight>
    </Wrapper>
  </Section>
);

export default EdgeSwitchback;
