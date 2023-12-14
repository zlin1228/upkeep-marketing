import React, { useRef } from 'react';
import GatsbyImage from '../../Image/GatsbyImage';
import CallToAction from '../../CallToAction';
import useIsHovered from '../../../hooks/useIsHovered';
import useSwipe from '../utils/useSwipe';
import {
  Container,
  Image,
  Body,
  Text,
  Button,
} from '../styles/IndustriesSlide.styled';

const IndustriesSlide = ({ component }) => {
  const cardRef = useRef(null);
  const isHovered = useIsHovered(cardRef);
  const { handleClick, handleMouseDown } = useSwipe();

  return (
    <Container ref={cardRef}>
      {component?.callToAction?.url && (
        <Button
          onMouseDown={e => handleMouseDown(e)}
          onClick={e => handleClick(e, component?.callToAction?.url)}
        />
      )}
      <Image>
        <GatsbyImage
          src={component?.thumbnail?.image?.gatsbyImageData}
          alt={component?.thumbnail?.image?.alt}
        />
      </Image>
      <Body>
        <Text>
          {component?.heading && (
            <p className="heading">{component?.heading}</p>
          )}
          {component?.subhead && (
            <div
              className="subhead"
              dangerouslySetInnerHTML={{ __html: component?.subhead }}
            />
          )}
        </Text>
        {component?.callToAction?.url && (
          <CallToAction
            variant="Red-Arrow-Link"
            icon="fa-solid fa-chevron-right"
            url={component?.callToAction?.url}
            label={component?.callToAction?.label}
            classes={isHovered ? 'hovered' : ''}
          />
        )}
      </Body>
    </Container>
  );
};

export default IndustriesSlide;
