import React, { useRef } from 'react';

import Breadcrumbs from '../../molecules/Breadcrumbs';
import CallToAction from '../CallToAction';

import {
  Section,
  Border,
  Wrapper,
  Content,
  Buttons,
  Button,
  Disclaimer,
  DisclaimerWrapper,
} from './styles/HeroSimple.styled';
import {
  BackgroundImage,
  primaryButton,
  secondaryButton,
} from './styles/Hero.styled';

import useParallaxEffect from '../../hooks/useParallaxEffect';

const HeroSimple = ({ component, showAnnouncementBar }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  const {
    theme,
    showParallaxGrid,
    headingKicker,
    heading,
    subhead,
    callToAction,
    secondCallToAction,
    disclaimer,
  } = component;

  return (
    <Section
      id="heroComponent"
      theme={theme}
      showAnnouncementBar={showAnnouncementBar}
    >
      {showParallaxGrid && (
        <BackgroundImage
          ref={backgroundRef}
          theme={theme}
          className="background-image"
          loading="eager"
        />
      )}
      <Wrapper>
        <Breadcrumbs theme={theme} />
        <Content theme={theme}>
          {headingKicker && <p className="eyebrow">{headingKicker}</p>}
          {heading && <h1 className="heading">{heading}</h1>}
          {subhead && (
            <p
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          <Buttons className="buttons">
            {callToAction && (
              <CallToAction
                {...callToAction}
                variant={primaryButton[theme]}
                size="xxl"
                styles={Button}
              />
            )}
            {secondCallToAction && (
              <CallToAction
                {...secondCallToAction}
                variant={secondaryButton[theme]}
                size="xxl"
                styles={Button}
              />
            )}
          </Buttons>
          {disclaimer && (
            <DisclaimerWrapper>
              <Disclaimer theme={theme}>{disclaimer}</Disclaimer>
            </DisclaimerWrapper>
          )}
        </Content>
      </Wrapper>
      {theme === 'Light-Gradient-Grid' && <Border />}
    </Section>
  );
};

export default HeroSimple;
