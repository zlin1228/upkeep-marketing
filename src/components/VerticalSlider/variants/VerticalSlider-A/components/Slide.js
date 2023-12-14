import React, { useRef, useEffect } from 'react';
import SlideText from './SlideText';
import useIntersection from '../../../../../hooks/useIntersection';
import { Container } from '../styles/Slide.styled';

const Slide = ({ id, component, setActiveSlideIndex }) => {
  const slideRef = useRef();
  const isVisible = useIntersection(slideRef, '-45%');

  useEffect(() => {
    if (isVisible) {
      setActiveSlideIndex(Number(id.split('-')[1]));
    }
  }, [isVisible]);

  return (
    <Container ref={slideRef} id={id}>
      <SlideText {...component} />
    </Container>
  );
};

export default Slide;
