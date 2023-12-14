import React from 'react';
import GatsbyImage from '../Image/GatsbyImage';
import CallToAction from '../CallToAction';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import {
  themes,
  Section,
  Wrapper,
  Row,
  Column,
  Text,
  Buttons,
  Button,
  Disclaimer,
} from './styles/HeroExtended.styled';

const HeroExtended = ({ component, showAnnouncementBar }) => {
  if (!component) return null;
  return (
    <Section
      id="heroComponent"
      theme={component?.theme}
      className="hero-container"
      isAnnouncementBar={showAnnouncementBar}
    >
      <Wrapper isAnnouncementBar={showAnnouncementBar}>
        <Breadcrumbs theme={component?.theme} />
        <Row>
          <Column className="column" maxWidth="570px">
            <Text theme={component?.theme}>
              <h1 className="heading">{component?.heading}</h1>
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: component?.subhead }}
              />
            </Text>
            <Buttons component={component}>
              {component?.callToAction && (
                <CallToAction
                  styles={Button}
                  variant={themes.primaryButton[component?.theme]}
                  {...component?.callToAction}
                />
              )}
              {component?.secondCallToAction && (
                <CallToAction
                  styles={Button}
                  variant={themes.secondaryButton[component?.theme]}
                  {...component?.secondCallToAction}
                />
              )}
            </Buttons>
            {component?.disclaimer && (
              <Disclaimer theme={component?.theme}>
                {component?.disclaimer}
              </Disclaimer>
            )}
          </Column>
          <Column className="column" maxWidth="745px">
            <GatsbyImage
              src={component?.featuredImage?.image?.gatsbyImageData}
              alt={component?.featuredImage?.image?.alt}
            />
          </Column>
        </Row>
      </Wrapper>
    </Section>
  );
};

export default HeroExtended;
