import React, { useState, useRef } from 'react';

import Icon from '../../molecules/Icon';
import Breadcrumbs from '../../molecules/Breadcrumbs';
import FeatureContent from './components/FeatureContent';
import CallToAction from '../CallToAction';
import CardDeck from '../CardDeck/CardDeck';
import HeroSocialProof from '../SocialProof/HeroSocialProof';
import TrustBar from '../TrustBar';
import VideoModal from '../Modal/VideoModal';

import { getYoutubeId } from '../../utils/getYoutubeId';
import {
  renderText,
  renderButtons,
  renderVideoPopup,
  renderTrustBar,
  renderFloatingTrustBar,
} from './utils/helpers';

import useParallaxEffect from '../../hooks/useParallaxEffect';

import {
  Section,
  BackgroundImage,
  OuterWrapper,
  InnerWrapper,
  Container,
  ContainerWrapper,
  Text,
  Heading,
  Column,
  Buttons,
  PlayButton,
  primaryButton,
  secondaryButton,
  playIcon,
  Media,
  SocalProof,
} from './styles/Hero.styled';

const Hero = ({ component, showAnnouncementBar, resource, location }) => {
  const [playPopup, setPlayPopup] = useState(false);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);
  const theme = component?.theme;
  const showGrid =
    theme === 'Grid' ||
    theme === 'Grid-Dark' ||
    theme === 'Grid-DarkBlue' ||
    component?.showParallaxGrid;
  return (
    <>
      <Section
        id="heroComponent"
        className="hero-container"
        theme={theme}
        announcementBar={showAnnouncementBar}
        floatingTrustBar={renderFloatingTrustBar(component)}
        trustBar={renderTrustBar(component)}
      >
        {showGrid && (
          <BackgroundImage
            ref={backgroundRef}
            theme={theme}
            className="background-image"
            loading="eager"
          />
        )}
        <OuterWrapper>
          {!component?.hideBreadcrumbs && (
            <Breadcrumbs
              theme={component?.backgroundImage ? 'Dark' : theme}
              resource={resource}
              location={location}
            />
          )}
          <InnerWrapper featuredContent={component?.featuredContent}>
            <Container featuredContent={component?.featuredContent}>
              <ContainerWrapper>
                {renderText(component) && (
                  <Text
                    theme={theme}
                    featuredContent={component?.featuredContent}
                  >
                    {component?.headingKicker && (
                      <p className="heading-kicker">
                        {component.headingKicker}
                      </p>
                    )}
                    {component?.heading && (
                      <Heading
                        className="heading"
                        theme={theme}
                        headingSize={component?.headingSize || 'lg'}
                      >
                        {component.heading}
                      </Heading>
                    )}
                    {component?.subhead && (
                      <div
                        className="subhead"
                        dangerouslySetInnerHTML={{ __html: component?.subhead }}
                      />
                    )}
                  </Text>
                )}
                {renderButtons(component) && (
                  <Column
                    theme={theme}
                    featuredContent={component?.featuredContent}
                  >
                    <Buttons>
                      {component?.callToAction && (
                        <CallToAction
                          {...component?.callToAction}
                          classes="primary-button"
                          variant={primaryButton[theme]}
                        />
                      )}
                      {component?.secondCallToAction && (
                        <CallToAction
                          {...component?.secondCallToAction}
                          classes="secondary-button"
                          variant={secondaryButton[theme]}
                        />
                      )}
                    </Buttons>
                    {component?.disclaimer && (
                      <p className="disclaimer">{component?.disclaimer}</p>
                    )}
                  </Column>
                )}
                {renderVideoPopup(component) && (
                  <>
                    <PlayButton
                      type="button"
                      theme={theme}
                      onClick={() => setPlayPopup(!playPopup)}
                    >
                      <Icon
                        id="fa-solid fa-play"
                        width="15px"
                        height="15px"
                        fillColor={playIcon[theme]}
                      />
                      {component?.videoModalComponent?.label}
                    </PlayButton>
                    <VideoModal
                      data={component?.videoModalComponent}
                      videoId={getYoutubeId(
                        component?.videoModalComponent?.video?.youtubeUrl
                      )}
                      autoplay
                      trigger={playPopup}
                      setTrigger={setPlayPopup}
                    />
                  </>
                )}
              </ContainerWrapper>
              <SocalProof>
                {component?.heroSocialProof && (
                  <HeroSocialProof
                    data={component.heroSocialProof}
                    theme={theme}
                  />
                )}
              </SocalProof>
            </Container>
            {component?.featuredContent && (
              <Media>
                <FeatureContent
                  component={component.featuredContent}
                  theme={theme}
                  location={location}
                />
              </Media>
            )}
          </InnerWrapper>
          {component?.showCardDeck && (
            <CardDeck component={{ card: component?.card }} />
          )}
        </OuterWrapper>
        {renderFloatingTrustBar(component) && (
          <TrustBar component={component?.trustBar} />
        )}
      </Section>
      {renderTrustBar(component) && (
        <TrustBar component={component?.trustBar} />
      )}
    </>
  );
};

export default Hero;
