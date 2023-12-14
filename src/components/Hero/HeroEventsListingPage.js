import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Text,
  Image,
} from './styles/HeroEventsListingPage.styled';

const HeroEventsListingPage = ({ component }) => (
  <Section>
    <OuterWrapper>
      <Breadcrumbs theme="light" />
      <InnerWrapper>
        <Text>
          {component?.headingKicker && <h5>{component?.headingKicker}</h5>}
          {component?.heading && <h1>{component?.heading}</h1>}
          {component?.subhead && (
            <div dangerouslySetInnerHTML={{ __html: component?.subhead }} />
          )}
          {component?.callToAction?.url && (
            <CallToAction
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
              variant="Red-Arrow-Link"
              icon="fa-solid fa-chevron-right"
            />
          )}
        </Text>

        <Image>
          <CallToAction
            url={component?.callToAction?.url}
            variant="Clickable"
          />
          {component?.featuredImage?.image?.gatsbyImageData && (
            <GatsbyImage
              src={component?.featuredImage?.image?.gatsbyImageData}
              alt={component?.featuredImage?.image?.alt}
            />
          )}
        </Image>
      </InnerWrapper>
    </OuterWrapper>
  </Section>
);

export default HeroEventsListingPage;
