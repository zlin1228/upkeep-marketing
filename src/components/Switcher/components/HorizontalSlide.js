import React from 'react';
import CallToAction from '../../CallToAction';
import GatsbyImage from '../../Image/GatsbyImage';
import {
  Subhead,
  Slide,
  SlideHeading,
  SlideText,
  Buttons,
  SlideImg,
} from '../styles/HorizontalSlide.styled';

const HorizontalSlide = ({ slide }) => (
  <Slide
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 1.2,
      ease: [0.04, 0.62, 0.23, 0.98],
    }}
  >
    <SlideText>
      <SlideHeading>{slide?.heading}</SlideHeading>
      <Subhead dangerouslySetInnerHTML={{ __html: slide?.subhead }} />
      <Buttons>
        <CallToAction
          url={slide?.primaryCta?.url}
          label={slide?.primaryCta?.label}
          variant="Red"
          size="lg"
        />
        <CallToAction
          classes="arrow"
          url={slide?.secondaryCta?.url}
          label={slide?.secondaryCta?.label}
          variant="Red-Arrow-Link"
          icon="fa-solid fa-chevron-right"
        />
      </Buttons>
    </SlideText>
    <SlideImg>
      <GatsbyImage
        src={slide?.featuredImage?.gatsbyImageData}
        alt={slide?.featuredImage?.alt}
      />
    </SlideImg>
  </Slide>
);

export default HorizontalSlide;
