import React from 'react';
import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import {
  Section,
  Overlay,
  Wrapper,
  Container,
  Text,
  Image,
} from './styles/index.styled';

const IntegrationsPanelFloating = ({
  headingKicker,
  heading,
  subhead,
  primaryCallToAction,
  image,
}) => (
  <Section>
    <Overlay />
    <Wrapper>
      <Container>
        <Text>
          {headingKicker && <p className="heading-kicker">{headingKicker}</p>}
          {heading && <h2 className="heading">{heading}</h2>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          {primaryCallToAction?.url && (
            <CallToAction
              url={primaryCallToAction.url}
              label={primaryCallToAction.label}
              nextIcon="fa-solid fa-chevron-right"
              variant="Link - Red"
            />
          )}
        </Text>
        {image?.image?.gatsbyImageData && (
          <Image>
            <GatsbyImage
              src={image.image.gatsbyImageData}
              alt={image?.image?.alt}
            />
          </Image>
        )}
      </Container>
    </Wrapper>
  </Section>
);

export default IntegrationsPanelFloating;
