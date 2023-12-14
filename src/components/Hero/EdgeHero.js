import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import ArrowRight from '../../assets/svg/ArrowRight';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  HeadingKicker,
  Heading,
  Subhead,
  PrimaryButton,
  GradientBackground,
} from './styles/EdgeHero';

const EdgeHero = ({ component }) => (
  <Section id="heroComponent" theme="Blue">
    <GradientBackground />
    <OuterWrapper>
      <Breadcrumbs theme="Blue" />
      <InnerWrapper>
        {component?.headingKicker && (
          <HeadingKicker theme="Blue">{component?.headingKicker}</HeadingKicker>
        )}
        {component?.heading && (
          <Heading
            theme="Blue"
            dangerouslySetInnerHTML={{ __html: component?.heading }}
          />
        )}
        {component?.subhead && (
          <Subhead
            theme="Blue"
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        )}
        <CallToAction
          theme="Blue"
          url={component?.primaryButton?.url}
          variant="Tertiary"
          styles={PrimaryButton}
        >
          {component?.primaryButton?.label}
          <ArrowRight />
        </CallToAction>
      </InnerWrapper>
    </OuterWrapper>
    <GatsbyImage
      src={component?.backgroundImage?.gatsbyImageData}
      alt="UpKeep Edge"
    />
  </Section>
);

export default EdgeHero;
