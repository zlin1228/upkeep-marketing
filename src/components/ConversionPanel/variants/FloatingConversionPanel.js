import React, { useRef } from 'react';

import SocialProof from '../../../molecules/SocialProof';

import useParallaxEffect from '../../../hooks/useParallaxEffect';

import socialProof from '../data/socialProof';

import {
  BackgroundImage,
  Container,
  Section,
  Text,
  Wrapper,
} from '../styles/FloatingConversionPanel.styled';

const FloatingConversionPanel = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  const { heading, subhead, addOns } = component;

  return (
    <Section>
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <Container>
          <Text>
            {heading && <h2 className="heading">{heading}</h2>}
            {subhead && <p className="subhead">{subhead}</p>}
          </Text>
          {addOns === 'Show Reviews' && (
            <SocialProof showRating logos={socialProof.socialProof} />
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default FloatingConversionPanel;
