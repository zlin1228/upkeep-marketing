import React from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import {
  Wrapper,
  Content,
  Kicker,
  Heading,
  Subheading,
  ButtonStyles,
  ImageWrapper,
} from '../styles/TabSwitcherSlide.styled';

import CallToAction from '../../CallToAction';

const TabSwitcherSlide = ({ component, index, activeIndex }) => (
  <Wrapper index={index} activeIndex={activeIndex}>
    <Content>
      {component?.headingKicker && <Kicker>{component?.headingKicker}</Kicker>}
      {component?.heading && <Heading>{component?.heading}</Heading>}
      {component?.subheading && (
        <Subheading
          dangerouslySetInnerHTML={{ __html: component?.subheading }}
        />
      )}
      {component?.callToAction && (
        <CallToAction
          {...component?.callToAction}
          variant="Outline Dark - Transparent"
          size="md"
          styles={ButtonStyles}
        />
      )}
    </Content>
    <ImageWrapper>
      <GatsbyImage
        src={component?.image?.image?.gatsbyImageData}
        alt={component?.image?.image?.alt}
      />
    </ImageWrapper>
  </Wrapper>
);

export default TabSwitcherSlide;
