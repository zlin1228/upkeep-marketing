import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import Author from '../Author/Author';
import {
  Section,
  Wrapper,
  FeaturedImage,
  Content,
  Details,
  KickerWrapper,
  HeadingKicker,
  SecondaryHeadingKicker,
  Heading,
  Subhead,
  LinkStyles,
} from './styles/index';
import CallToAction from '../CallToAction/index';

const CaseStudy = ({ component }) => (
  <Section theme={component?.theme}>
    <Wrapper
      reversed={component?.reversed}
      fullwidth={component?.fullWidthImage}
    >
      <FeaturedImage
        reversed={component?.reversed}
        fullwidth={component?.fullWidthImage}
      >
        <GatsbyImage
          src={component?.featuredImage?.image?.gatsbyImageData}
          alt={component?.featuredImage?.image?.alt}
        />
      </FeaturedImage>
      <Content
        href={component?.callToAction?.url}
        reversed={component?.reversed}
        fullwidth={component?.fullWidthImage}
      >
        <Details>
          <KickerWrapper>
            <HeadingKicker color={component?.headingKickerColor}>
              {component?.headingKicker}
            </HeadingKicker>
            {component?.secondaryHeadingKicker && (
              <SecondaryHeadingKicker
                color={component?.secondaryHeadingKickerColor}
              >
                {component?.secondaryHeadingKicker}
              </SecondaryHeadingKicker>
            )}
          </KickerWrapper>
          <Heading>{component?.heading}</Heading>
          <Subhead>{component?.subhead}</Subhead>
          <Author author={component?.author} />
        </Details>
        <CallToAction
          url={component?.callToAction?.url}
          label={component?.secondaryCallToAction?.label}
          variant="Red-Arrow-Link"
          icon="fa-solid fa-chevron-right"
          styles={LinkStyles}
        >
          {component?.callToAction?.label}
        </CallToAction>
      </Content>
    </Wrapper>
  </Section>
);

export default CaseStudy;
