import React, { useState, useEffect } from 'react';
import Icon from '../../molecules/Icon';
import { iconColors } from '../../utils/colorMappings';
import {
  Section,
  Container,
  Row,
  BackgroundImages,
  AnimationLeftWrapper,
  AnimationRightWrapper,
  ImageLeftWrapper,
  ImageRightWrapper,
  HeadingKicker,
  Heading,
  Subhead,
  IconHolder,
  FreeTrialCTA,
  SocialProof,
} from '../../styles/Components/Banner/FullWidthBanner';
import CallToAction from '../CallToAction';
import FreeTrialSignup from '../FreeTrialSignup/FreeTrialSignup';
import Lottie from '../Lottie/Lottie';
import fetchAnimation from '../Lottie/utils/fetchAnimation';
import ReviewsStatsBar from '../StatsBar/ReviewsStatsBar/ReviewsStatsBar';
import GatsbyImage from '../Image/GatsbyImage';

const FullWidthBanner = ({
  component,
  isHeroComponent,
  showAnnouncementBar,
}) => {
  const showCallToActions =
    component?.callToAction ||
    component?.secondaryCallToAction ||
    component?.showFreeTrialLink;
  const [animationLeft, setAnimationLeft] = useState();
  const [animationRight, setAnimationRight] = useState();
  useEffect(() => {
    if (component.showLottieAnimations) {
      fetchAnimation(component?.lottieAnimationLeft?.url, setAnimationLeft);
      fetchAnimation(component?.lottieAnimationRight?.url, setAnimationRight);
    }
  }, []);
  return (
    <Section
      id={isHeroComponent ? 'heroComponent' : 'fullWidthBanner'}
      theme={component?.backgroundColor}
      isHeroComponent={isHeroComponent?.toString()}
      showAnnouncementBar={showAnnouncementBar?.toString()}
    >
      {component?.showBackgroundImages && (
        <BackgroundImages>
          <ImageLeftWrapper>
            <img
              className="image_left"
              src={component?.imageLeft?.image?.url}
              alt="UpKeep Overview"
              loading="lazy"
            />
          </ImageLeftWrapper>
          <ImageRightWrapper>
            <img
              className="image_right"
              src={component?.imageRight?.image?.url}
              alt="UpKeep Overview"
              loading="lazy"
            />
          </ImageRightWrapper>
        </BackgroundImages>
      )}
      {component?.showLottieAnimations && (
        <BackgroundImages>
          <AnimationLeftWrapper>
            <Lottie
              className="image_left"
              animation={animationLeft}
              delay={0}
              loop
            />
          </AnimationLeftWrapper>
          <AnimationRightWrapper>
            <Lottie
              className="image_right"
              animation={animationRight}
              delay={0}
              loop
            />
          </AnimationRightWrapper>
        </BackgroundImages>
      )}
      <Container>
        {component?.headingKickerIcon && (
          <IconHolder>
            <Icon
              id={component?.headingKickerIcon}
              fillColor={iconColors[component?.headingIconColor]}
              width="25px"
              height="25px"
            />
          </IconHolder>
        )}
        {component?.headingKicker && (
          <HeadingKicker
            color={component?.headingKickerColor}
            className="text-center"
          >
            {component?.headingKicker}
          </HeadingKicker>
        )}
        {component?.heading && (
          <Heading theme={component?.backgroundColor}>
            {component?.heading}
          </Heading>
        )}
        {component?.subhead && (
          <Subhead
            theme={component?.backgroundColor}
            dangerouslySetInnerHTML={{ __html: component?.subhead }}
          />
        )}
        {showCallToActions && (
          <Row>
            <CallToAction
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
              variant="Red"
              size="xl"
            />
            {component?.secondaryCallToAction && (
              <CallToAction
                url={component?.secondaryCallToAction?.url}
                label={component?.secondaryCallToAction?.label}
                variant="Red-Arrow-Link"
                icon="fa-solid fa-chevron-right"
              />
            )}
            {component?.showFreeTrialLink && (
              <FreeTrialCTA>
                <FreeTrialSignup />
              </FreeTrialCTA>
            )}
          </Row>
        )}
        {component?.showStatsBar && (
          <ReviewsStatsBar stats={component?.stats} />
        )}
        {component?.showSocialProof && (
          <SocialProof>
            {component?.socialProofLogos.map(({ image }) => (
              <GatsbyImage
                key={image?.url}
                src={image?.gatsbyImageData || image?.url}
                alt={image?.alt}
              />
            ))}
          </SocialProof>
        )}
      </Container>
    </Section>
  );
};

export default FullWidthBanner;
