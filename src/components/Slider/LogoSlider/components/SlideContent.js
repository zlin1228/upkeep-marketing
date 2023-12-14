import React from 'react';
import {
  Wrapper,
  HeadingKicker,
  Heading,
  Subheading,
  ButtonStyles,
} from '../styles/SlideContent.styled';

import CallToAction from '../../../CallToAction';

const SlideContent = ({ component, id, animateSlide }) => (
  <Wrapper id={id} animateSlide={animateSlide}>
    <HeadingKicker>{component?.headingKicker}</HeadingKicker>
    <Heading>{component?.heading}</Heading>
    <Subheading dangerouslySetInnerHTML={{ __html: component?.subhead }} />
    <CallToAction
      variant="Link - Dark"
      size="xl"
      styles={ButtonStyles}
      nextIcon="fa-solid fa-chevron-right"
      {...component?.callToAction}
    />
  </Wrapper>
);

export default SlideContent;
