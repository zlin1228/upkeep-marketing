import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Frame,
  ImageWrapper,
  SlideDetails,
  Heading,
} from '../styles/Slide.styled';
import GatsbyImage from '../../../Image/GatsbyImage';
import CallToAction from '../../../CallToAction';

const Slide = ({ component, activeSlide, index, mobileActive }) => (
  <Frame activeSlide={activeSlide} index={index}>
    <ImageWrapper
      activeSlide={activeSlide}
      index={index}
      mobileActive={mobileActive}
    >
      <GatsbyImage
        src={component?.image?.gatsbyImageData}
        alt={component.image?.alt || component?.image?.internalName}
      />
    </ImageWrapper>
    <AnimatePresence>
      {(index === activeSlide || mobileActive) && (
        <SlideDetails
          initial="collapsed"
          animate="open"
          exit="collapsed"
          transition={{ delay: 0.1 }}
          variants={{
            open: { opacity: 1 },
            collapsed: { opacity: 0 },
          }}
        >
          <Heading>{component?.heading}</Heading>
          {component?.callToAction?.url && (
            <CallToAction
              variant="Red-Arrow-Link"
              icon="fa-solid fa-chevron-right"
              url={component?.callToAction?.url}
              label={component?.callToAction?.label}
            />
          )}
        </SlideDetails>
      )}
    </AnimatePresence>
  </Frame>
);

export default Slide;
