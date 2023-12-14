import React, { useRef } from 'react';

import Card from './components/Card';
import CallToAction from '../CallToAction';
import GatsbyImage from '../Image/GatsbyImage';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  BackgroundImage,
  Wrapper,
  Header,
  Logo,
  Buttons,
  headerMap,
} from './styles/Slidebox.styled';

const Slidebox = ({ component }) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  const {
    layoutSection,
    theme,
    logo,
    headingKicker,
    heading,
    subhead,
    cards,
    primaryCta,
    secondaryCta,
  } = component;

  return (
    <Section {...layoutSection} theme={theme}>
      <BackgroundImage
        ref={backgroundRef}
        theme={theme}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <Header>
          {logo?.image?.gatsbyImageData && (
            <Logo>
              <GatsbyImage src={logo?.image?.gatsbyImageData} alt={logo?.alt} />
            </Logo>
          )}
          <HeadingComponent
            theme={headerMap[theme]}
            headingKicker={headingKicker}
            heading={heading}
            subhead={subhead}
          />
        </Header>
        {cards?.map(card => (
          <Card key={card?.id} component={card} />
        ))}
        {(primaryCta?.url || secondaryCta?.url) && (
          <Buttons>
            <CallToAction variant="Filled - Steel" size="xxl" {...primaryCta} />
            <CallToAction
              variant="Outline - Dark"
              size="xxl"
              {...secondaryCta}
            />
          </Buttons>
        )}
      </Wrapper>
    </Section>
  );
};

export default Slidebox;
