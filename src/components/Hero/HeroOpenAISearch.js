import React, { useRef } from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import OpenAISearch from '../OpenAI/Search';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  BackgroundGradient,
  BackgroundImage,
  OuterWrapper,
  InnerWrapper,
  Text,
} from './styles/HeroOpenAISearch.styled';

const HeroOpenAISearch = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  const { headingKicker, heading, subhead } = component;
  return (
    <Section>
      <BackgroundGradient />
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <OuterWrapper>
        <Breadcrumbs theme="Grid" />
        <InnerWrapper>
          <Text>
            {headingKicker && <p className="eyebrow">{headingKicker}</p>}
            {heading && <h1 className="heading">{heading}</h1>}
            {subhead && (
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
            )}
          </Text>
          <OpenAISearch />
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default HeroOpenAISearch;
