import React from 'react';
import GatsbyImage from '../../../Image/GatsbyImage';
import { ImageWrapper, LogoWrapper } from '../styles/Image.styled';

const Image = ({ component, id, animateSlide }) => (
  <ImageWrapper id={id} animateSlide={animateSlide}>
    <GatsbyImage
      src={component?.image?.gatsbyImageData}
      alt={component?.image?.altText}
    />
    <LogoWrapper>
      <GatsbyImage
        src={component?.icon?.gatsbyImageData}
        alt={component?.icon?.altText}
      />
    </LogoWrapper>
  </ImageWrapper>
);

export default Image;
