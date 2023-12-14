import React from 'react';

import HeadingComponent from '../../HeadingComponent/HeadingComponent';
import ScrollingLogos from '../components/ScrollingLogos';

import { Section, Wrapper } from '../styles/index.styled';

const themes = {
  Color: 'color',
  White: 'white',
  Grayscale: 'gray',
};

const TrustBarScrolling = ({ component }) => {
  const {
    variant,
    theme,
    backgroundColor,
    sectionLayout,
    headingKicker,
    heading,
    subhead,
    primaryButton,
    secondaryButton,
    company: logos,
  } = component;

  const renderHeading =
    headingKicker || heading || subhead || primaryButton || secondaryButton;

  return (
    <Section
      className="trustbar-wrapper"
      background={backgroundColor}
      {...sectionLayout}
    >
      <Wrapper className="trustbar-container">
        {renderHeading && (
          <HeadingComponent
            theme={theme === 'White' ? 'dark' : 'light'}
            headingKicker={headingKicker}
            heading={heading}
            subhead={subhead}
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
          />
        )}
        {logos && logos?.length > 0 && (
          <ScrollingLogos
            variant={variant}
            logos={logos}
            background={backgroundColor}
            theme={themes[theme]}
          />
        )}
      </Wrapper>
    </Section>
  );
};

export default TrustBarScrolling;
