import React, { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Icon from '../../molecules/Icon';
import GatsbyImage from '../Image/GatsbyImage';
import SocialProof from '../../molecules/SocialProof';
import CallToAction from '../CallToAction';
import VideoModal from '../Modal/VideoModal';
import ScreenImage from './assets/screen-mockup.png';
import PhoneImage from './assets/phone-mockup.png';
import { getYoutubeId } from '../../utils/getYoutubeId';
import useParallaxEffect from '../../hooks/useParallaxEffect';
import { useAnnouncementBar } from '../../context/announcementBarContext';
import { color } from '../../atoms/colors';
import {
  Section,
  BackgroundImage,
  Wrapper,
  Container,
  Content,
  Text,
  Buttons,
  Image,
  Spacer,
  PlayButton,
} from './styles/HeroHomePage.styled';

const HeroHomePage = ({ component }) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const { announcementBarHeight } = useAnnouncementBar();
  const [openModal, setOpenModal] = useState(false);
  const backgroundRef = useRef(null);
  useParallaxEffect(backgroundRef);

  useEffect(() => {
    const tabletImage = document.querySelector('.screen-image');
    const phoneImage = document.querySelector('.phone-image');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (width >= 1170) {
        if (scrollPosition < 100) {
          phoneImage.style.transform = `translateY(-${
            scrollPosition * 0.35
          }px)`;
        }
        tabletImage.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const {
    subhead,
    callToAction,
    secondCallToAction,
    showSocialProof,
    heroSocialProof,
    videoModalComponent,
  } = component;
  const videoId = getYoutubeId(videoModalComponent?.video?.youtubeUrl);

  return (
    <Section announcementBarHeight={announcementBarHeight}>
      {videoModalComponent && (
        <VideoModal
          data={videoModalComponent}
          videoId={videoId}
          trigger={openModal}
          setTrigger={setOpenModal}
          autoplay
        />
      )}
      <BackgroundImage
        ref={backgroundRef}
        className="background-image"
        loading="eager"
      />
      <Wrapper>
        <Container>
          <Content>
            <Text>
              <h1 className="heading">
                <Trans i18nKey="#1 Software for Maintenance & Reliability Teams">
                  #1 Software for{' '}
                  <span title={t('Maintenance & Reliability')} />
                  Teams
                </Trans>
              </h1>
              <div
                className="subhead"
                dangerouslySetInnerHTML={{ __html: subhead }}
              />
              {callToAction?.url || secondCallToAction?.url ? (
                <Buttons>
                  {callToAction?.url && (
                    <CallToAction
                      url={callToAction?.url}
                      label={callToAction?.label}
                      variant="Filled - Red"
                      size="xxl"
                    />
                  )}
                  {secondCallToAction?.url && (
                    <CallToAction
                      url={secondCallToAction?.url}
                      label={secondCallToAction?.label}
                      variant="Outline - Dark"
                      size="xxl"
                    />
                  )}
                </Buttons>
              ) : null}
            </Text>
            {showSocialProof && (
              <SocialProof showRating logos={heroSocialProof.socialProof} />
            )}
          </Content>
          <Image>
            {videoModalComponent && (
              <PlayButton
                onClick={() => setOpenModal(true)}
                aria-label="Play Video"
              >
                <Icon id="fa-solid fa-play" fillColor={color.common.white} />
              </PlayButton>
            )}
            <GatsbyImage
              src={ScreenImage}
              alt="Screen Image"
              classes="screen-image"
              loading="eager"
            />
            <GatsbyImage
              src={PhoneImage}
              alt="Phone Image"
              classes="phone-image"
              loading="eager"
            />
          </Image>
        </Container>
      </Wrapper>
      <Spacer />
    </Section>
  );
};

export default HeroHomePage;
