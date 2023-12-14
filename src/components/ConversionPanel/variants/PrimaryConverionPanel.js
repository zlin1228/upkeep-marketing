import React from 'react';
import CallToAction from '../../CallToAction';
import SocialProof from '../../SocialProof/HeroSocialProof';
import { setSubheadTheme, setHeadingTheme } from '../utils/setThemes';
import socialProof from '../data/socialProof';
import {
  Container,
  Wrapper,
  Details,
  HeadingKicker,
  Heading,
  Subhead,
  FallbackText,
  Buttons,
  setCallToActionStyles,
} from '../styles/index.styled';

const PrimaryConversionPanel = ({ component }) => (
  <Container theme={component?.theme || 'Light'} layout={component?.layout}>
    <Wrapper layout={component?.layout}>
      <Details>
        {component?.headingKicker && (
          <HeadingKicker color={component?.theme}>
            {component?.headingKicker}
          </HeadingKicker>
        )}
        {component?.heading && (
          <Heading color={setHeadingTheme(component?.theme)}>
            {component?.heading}
          </Heading>
        )}
        {component?.subhead && (
          <Subhead
            color={setSubheadTheme(component?.theme)}
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        )}
        {component?.callToAction && (
          <Buttons>
            <CallToAction
              variant={
                {
                  Light: 'Filled - Dark',
                  Blue: 'Filled - White',
                  Dark: 'Filled - White',
                }[component?.theme]
              }
              size="lg"
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
              styles={setCallToActionStyles(component)}
            />
            {component?.secondaryButton && (
              <CallToAction
                variant={
                  {
                    Light: 'Primary',
                    Blue: 'Tertiary',
                    Dark: 'Primary',
                  }[component?.theme]
                }
                url={component?.secondaryButton?.url}
                label={component?.secondaryButton?.label}
                styles={setCallToActionStyles(component)}
                classes="secondary"
              />
            )}
          </Buttons>
        )}
        {component?.fallbackText && (
          <FallbackText color={setSubheadTheme(component?.theme)}>
            {component?.fallbackText}
          </FallbackText>
        )}
        {component?.addOns === 'Show Reviews' && (
          <SocialProof data={socialProof} theme={component?.theme} />
        )}
      </Details>
    </Wrapper>
  </Container>
);

export default PrimaryConversionPanel;
