import React from 'react';

import CallToAction from '../../CallToAction';
import StructuredText from './StructuredText';

import {
  Container,
  Text,
  Buttons,
  primaryLinkMap,
} from '../styles/Content.styled';

const renderContent = (
  headingKicker,
  heading,
  structuredText,
  primaryButton,
  secondaryButton,
  primaryLink
) => {
  if (
    !headingKicker &&
    !heading &&
    !structuredText &&
    !primaryButton &&
    !secondaryButton &&
    !primaryLink
  ) {
    return false;
  }

  return true;
};

const Content = ({
  theme,
  reverse,
  headingKicker,
  heading,
  structuredText,
  primaryButton,
  secondaryButton,
  primaryLink,
}) => {
  const render = renderContent(
    headingKicker,
    heading,
    structuredText,
    primaryButton,
    secondaryButton,
    primaryLink
  );
  if (!render) return null;
  return (
    <Container reverse={reverse}>
      <Text theme={theme}>
        {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
        {heading && <p className="heading">{heading}</p>}
        <StructuredText theme={theme} subhead={structuredText} />
        {primaryButton || secondaryButton || primaryLink ? (
          <Buttons theme={theme}>
            {primaryButton && (
              <CallToAction {...primaryButton} classes="primary-button" />
            )}
            {secondaryButton && (
              <CallToAction {...secondaryButton} classes="secondary-button" />
            )}
            {primaryLink?.label && (
              <CallToAction
                {...primaryLink}
                classes="primary-link"
                nextIcon="fa-solid fa-chevron-right"
                variant={primaryLinkMap[theme] || 'Link - Dark'}
              />
            )}
          </Buttons>
        ) : null}
      </Text>
    </Container>
  );
};

export default Content;
