import React, { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

import SlideText from '../../VerticalSlider-A/components/SlideText';
import GatsbyImage from '../../../../Image/GatsbyImage';

import useFirstRender from '../../../../../hooks/useFirstRender';

import { Container, Wrapper } from '../styles/Slide.styled';
import { breakpointNumbers } from '../../../../../atoms/breakpoints';

const Slide = ({ index, slide, setSlideHeights, activeSlide }) => {
  const { id } = slide;
  const { width } = useWindowSize();

  const firstRender = useFirstRender();
  const slideRef = useRef(null);

  useEffect(() => {
    if (!firstRender) return;

    const slideHeight = slideRef.current.clientHeight;
    setSlideHeights(prev => [...prev, slideHeight]);
  }, []);

  return (
    <Container id={id} className="vertical-slide" ref={slideRef}>
      <Wrapper className={activeSlide === index ? 'active' : ''}>
        <SlideText {...slide} />
        {width < breakpointNumbers.xl && (
          <GatsbyImage
            key={slide?.id}
            src={slide?.image?.image?.gatsbyImageData}
            alt={slide?.image?.image?.alt}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Slide;
