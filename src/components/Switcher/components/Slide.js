import React from 'react';
import {
  Slide,
  SlideImage,
  SlideHeading,
  SlideDescription,
} from '../styles/Slide';
import CallToAction from '../../CallToAction';

import GatsbyImage from '../../Image/GatsbyImage';
import Lottie from '../../Lottie/Lottie';

const StackSlide = ({ theme, slide, animation }) => (
  <Slide
    key={slide?.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <SlideImage>
      {slide?.showFeaturedImage && (
        <GatsbyImage
          src={slide?.featuredImage?.image?.gatsbyImageData}
          alt={slide?.featuredImage?.image?.alt}
        />
      )}
      {slide?.showLottieAnimation && (
        <Lottie animation={animation} loop={false} delay={500} />
      )}
    </SlideImage>
    <SlideHeading theme={theme}>{slide?.heading}</SlideHeading>
    <SlideDescription
      theme={theme}
      dangerouslySetInnerHTML={{ __html: slide?.subhead }}
    />
    {slide?.callToAction && (
      <CallToAction
        url={slide?.callToAction?.url}
        label={slide?.callToAction?.label}
        variant="Red-Arrow-Link"
        icon="fa-solid fa-chevron-right"
      />
    )}
  </Slide>
);

export default StackSlide;
