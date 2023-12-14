import React, { useState } from 'react';

import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import InlineVideo from '../../../molecules/InlineVideo';

import { renderHeaderMedia, renderHeaderText } from '../utils/renderUtils';

import {
  Container,
  Text,
  Buttons,
  Image,
  Video,
} from '../styles/Header.styled';

const Header = ({
  component: {
    theme,
    headingKicker,
    heading,
    subhead,
    primaryCallToAction,
    secondaryCallToAction,
    image,
    video,
  },
  headerRef,
  fullwidthImage,
}) => {
  const [play, setPlay] = useState(false);
  const renderText = renderHeaderText(
    headingKicker,
    heading,
    subhead,
    primaryCallToAction,
    secondaryCallToAction,
    image,
    video
  );
  const renderMedia = renderHeaderMedia(image, video);

  if (!renderText && !renderMedia) return null;
  return (
    <Container ref={headerRef} backgroundColor={theme}>
      {renderText && (
        <Text theme={theme}>
          {headingKicker && <p className="eyebrow">{headingKicker}</p>}
          {heading && <h2 className="heading">{heading}</h2>}
          {subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: subhead }}
            />
          )}
          {primaryCallToAction?.url || secondaryCallToAction?.url ? (
            <Buttons theme={theme}>
              {primaryCallToAction?.url && (
                <CallToAction
                  url={primaryCallToAction.url}
                  label={primaryCallToAction?.label}
                  variant="Red"
                  size="xxl"
                  classes="primary-button"
                />
              )}
              {secondaryCallToAction?.url && (
                <CallToAction
                  url={secondaryCallToAction.url}
                  label={secondaryCallToAction?.label}
                  variant="Red-Outlined"
                  size="xxl"
                  classes="secondary-button"
                />
              )}
            </Buttons>
          ) : null}
        </Text>
      )}
      {renderMedia && (
        <>
          {image?.image?.gatsbyImageData || image?.image?.url ? (
            <Image fullwidthImage={fullwidthImage}>
              <GatsbyImage
                src={image?.image?.gatsbyImageData || image?.image?.url}
                alt={image?.image?.alt || image?.image?.title}
              />
            </Image>
          ) : null}
          {video?.youtubeUrl || video?.youtubeURL ? (
            <Video>
              <InlineVideo
                youtubeURL={video?.youtubeUrl || video?.youtubeURL}
                thumbnail={
                  video?.videoThumbnail?.image?.url || video?.thumbnail
                }
                customPlayState={play}
                setCustomPlayState={setPlay}
                onChange={() => setPlay(true)}
              />
            </Video>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default Header;
