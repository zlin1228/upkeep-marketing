/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import Icon from '../../../molecules/Icon';
import useParallaxEffect from '../../../hooks/useParallaxEffect';
import { color } from '../../../atoms/colors';
import {
  Section,
  BackgroundImage,
  Wrapper,
  Container,
  Content,
  Text,
  Buttons,
  Logos,
  Logo,
  Reviews,
} from '../styles/FloatingSocialProof.styled';

const FloatingSocialProof = ({
  id,
  backgroundColor,
  containerBackgroundColor,
  showParallaxGrid,
  headingKicker,
  heading,
  subhead,
  primaryCallToAction,
  secondaryCallToAction,
  socialProof,
  showReviewsSection,
  reviewsText,
  reviewLogos,
}) => {
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  return (
    <Section id={id} backgroundColor={backgroundColor}>
      {showParallaxGrid && (
        <BackgroundImage
          ref={backgroundRef}
          className="social-proof-background-image"
          backgroundColor={backgroundColor}
        />
      )}
      <Wrapper>
        <Container theme={containerBackgroundColor}>
          <Content>
            {headingKicker || heading || subhead ? (
              <Text theme={containerBackgroundColor}>
                {headingKicker && (
                  <p className="heading-kicker">{headingKicker}</p>
                )}
                {heading && <h2 className="heading">{heading}</h2>}
                {subhead && <p className="subhead">{subhead}</p>}
              </Text>
            ) : null}
            {primaryCallToAction || secondaryCallToAction ? (
              <Buttons>
                <CallToAction
                  {...primaryCallToAction}
                  variant={
                    containerBackgroundColor === 'light'
                      ? 'Filled - Steel'
                      : 'Filled - Red'
                  }
                  size="xxl"
                />
                <CallToAction
                  {...secondaryCallToAction}
                  variant={
                    containerBackgroundColor === 'light'
                      ? 'Outline - Steel'
                      : 'Outline - White'
                  }
                  size="xxl"
                />
              </Buttons>
            ) : null}
          </Content>
          {socialProof && socialProof?.length > 0 ? (
            <Logos numOfItems={socialProof.length}>
              {socialProof.map(({ image }) => (
                <Logo key={image?.alt}>
                  <GatsbyImage
                    src={image?.gatsbyImageData || image?.url}
                    alt={image?.alt || image?.title}
                    objectFit="contain"
                  />
                </Logo>
              ))}
            </Logos>
          ) : null}
          {showReviewsSection && (
            <Reviews theme={containerBackgroundColor}>
              <div className="label">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      id="star"
                      width="15px"
                      height="15px"
                      fillColor={color.yellow[700]}
                    />
                  ))}
                </div>
                {reviewsText && <p className="label-text">{reviewsText}</p>}
              </div>
              <div className="logos">
                {reviewLogos?.map(({ image }) => (
                  <GatsbyImage
                    src={image?.gatsbyImageData || image?.url}
                    alt={image?.alt || image?.title}
                    objectFit="contain"
                  />
                ))}
              </div>
            </Reviews>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default FloatingSocialProof;
