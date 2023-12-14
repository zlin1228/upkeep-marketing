import React from 'react';
import CallToAction from '../../CallToAction';
import {
  Img,
  ImgWrapper,
  SlideContainer,
  Heading,
  Text,
  TextWrapper,
  Link,
} from '../styles/Slide.styled';

const Slide = ({ slide, active, id }) => (
  <SlideContainer className={active === id ? 'show' : 'hide'}>
    <ImgWrapper>
      <Img
        src={slide?.image?.image?.url}
        alt={slide?.image?.alt || slide?.heading}
      />
    </ImgWrapper>
    <TextWrapper>
      <Heading>{slide?.heading}</Heading>
      <Text>{slide?.description}</Text>
      {slide?.callToAction?.url && (
        <CallToAction
          url={slide?.callToAction?.url}
          label={slide?.callToAction?.label}
          styles={Link}
        />
      )}
    </TextWrapper>
  </SlideContainer>
);

export default Slide;
