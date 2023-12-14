import React, { useRef } from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import ChecklistGenerator from '../OpenAI/ChecklistGenerator';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  BackgroundColor,
  TopBackgroundGrid,
  BottomBackgroundGrid,
  Wrapper,
  Text,
} from './styles/HeroChecklistGenerator.styled';

const HeroChecklistGenerator = ({ component }) => {
  const topBackgroundRef = useRef(null);
  const bottomBackgroundRef = useRef(null);
  useParallaxEffect(topBackgroundRef);
  useParallaxEffect(bottomBackgroundRef);

  const { headingKicker, heading, subhead } = component;

  return (
    <Section>
      <BackgroundColor />
      <TopBackgroundGrid
        ref={topBackgroundRef}
        className="background-image"
        loading="eager"
      />
      <BottomBackgroundGrid
        ref={bottomBackgroundRef}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <Breadcrumbs theme="Grid-Dark" />
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
      </Wrapper>
      <ChecklistGenerator />
    </Section>
  );
};

export default HeroChecklistGenerator;
