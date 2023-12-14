import React, { useRef } from 'react';
import { css } from 'styled-components';

import { color } from '../../../atoms/colors';

import Icon from '../../../molecules/Icon';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';

import limitWordCount from '../../../utils/limitWordCount';
import useIsHovered from '../../../hooks/useIsHovered';

import {
  Container,
  Image,
  Asset,
  IconCircle,
  Body,
  Text,
  linkColorMap,
  buttonColorMap,
} from './styles/index.styled';

const CardComponent = ({
  card: {
    theme,
    alignment,
    fontAwesomeIcon,
    thumbnail,
    badge,
    headingKicker,
    heading,
    subhead,
    truncateText,
    wordCount,
    callToAction,
  },
}) => {
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);

  return (
    <Container ref={cardRef} theme={theme || 'light'} cta={callToAction?.url}>
      {callToAction?.url && (
        <CallToAction url={callToAction.url} variant="Clickable" />
      )}
      {thumbnail && (
        <Image isHovered={isHovered}>
          <GatsbyImage
            src={thumbnail?.image?.gatsbyImageData}
            alt={thumbnail?.image?.alt}
          />
        </Image>
      )}
      {fontAwesomeIcon && (
        <Asset alignment={alignment}>
          <IconCircle>
            <Icon
              id={fontAwesomeIcon}
              width="100%"
              height="100%"
              fillColor="#fff"
            />
          </IconCircle>
        </Asset>
      )}
      {headingKicker || heading || subhead || callToAction?.url ? (
        <Body theme={theme}>
          {badge || headingKicker || heading || subhead ? (
            <Text theme={theme || 'light'} alignment={alignment}>
              {badge && <p className="badge">{badge}</p>}
              {headingKicker && <p className="eyebrow">{headingKicker}</p>}
              {heading && <p className="heading">{heading}</p>}
              {subhead && (
                <div
                  className="subhead"
                  dangerouslySetInnerHTML={{
                    __html:
                      truncateText && wordCount
                        ? limitWordCount(subhead, wordCount)
                        : subhead,
                  }}
                />
              )}
            </Text>
          ) : null}
          {callToAction?.url && (
            <CallToAction
              url={callToAction.url}
              variant={
                alignment === 'center'
                  ? buttonColorMap[theme || 'light']
                  : linkColorMap[theme || 'light']
              }
              size={alignment === 'center' && 'sm'}
              nextIcon={alignment !== 'center' && 'fa-solid fa-chevron-right'}
              classes={isHovered ? 'hovered' : ''}
              styles={
                theme === 'blue-hover-gradient' &&
                css`
                  width: fit-content;
                  &.hovered {
                    color: ${color.darkBlue[1000]};
                    svg {
                      use {
                        fill: ${color.darkBlue[1000]} !important;
                      }
                    }
                  }
                `
              }
            >
              {callToAction?.label}
            </CallToAction>
          )}
        </Body>
      ) : null}
    </Container>
  );
};

export default CardComponent;
