import React, { useRef } from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  OuterWrapper,
  InnerWrapper,
  BackgroundImage,
} from './styles/HeroContactUs.styled';

const HeroContactUs = () => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  return (
    <Section>
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <OuterWrapper>
        <Breadcrumbs theme="Dark" />
        <InnerWrapper>
          <p className="heading-kicker">Contact Us</p>
          <h1 className="heading">Get in touch</h1>
          <p className="subhead">
            Looking to contact us? We value your feedback and would be delighted
            to hear from you. Support is available 24/7. Here's how you can
            reach us.
          </p>
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroContactUs;
