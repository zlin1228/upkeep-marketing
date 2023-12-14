import React, { useRef } from 'react';

import HeadingComponent from '../../HeadingComponent/HeadingComponent';
import StaticLogos from '../components/StaticLogos';
import useParallaxEffect from '../../../hooks/useParallaxEffect';

import { Section, Wrapper, BackgroundImage } from '../styles/index.styled';

const themes = {
  Color: 'color',
  White: 'white',
  Grayscale: 'gray',
};

const TrustBarStandard = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);
  console.log(component);
  const {
    variant,
    theme,
    backgroundColor,
    showGridBackground,
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
      {showGridBackground && (
        <BackgroundImage
          ref={backgroundRef}
          theme={theme}
          className="background-image"
          loading="eager"
        />
      )}
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
          <StaticLogos
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

export default TrustBarStandard;
