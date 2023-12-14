import React, { useEffect } from 'react';
import { useWindowSize } from 'react-use';

import { handleScroll } from '../utils';

import { breakpointNumbers } from '../../../../../atoms/breakpoints';
import { Button, Container, Spacer, Wrapper } from '../styles/Controls.styled';

const Controls = ({
  slides,
  controlsRef,
  buttonRefs,
  isScrolled,
  activeSlide,
  setActiveSlide,
}) => {
  const { width } = useWindowSize();

  useEffect(() => {
    const controls = controlsRef?.current;
    console.log(controls);
  }, [controlsRef]);

  return (
    <Container scrolled={isScrolled}>
      <Wrapper ref={controlsRef} numOfItems={slides?.length}>
        {slides?.map((slide, index) => (
          <Button
            key={slide?.id}
            ref={buttonRefs[index]}
            onClick={() => {
              handleScroll({
                id: slide?.id,
                index,
                windowWidth: width,
                numOfSlide: slides?.length,
                setActiveSlide,
                controlsRef,
              });
            }}
            className={
              activeSlide === index
                ? `control-btn-${index} hovered`
                : `control-btn-${index}`
            }
          >
            {slide?.headingKicker}
          </Button>
        ))}
        {width < breakpointNumbers.xl && <Spacer />}
      </Wrapper>
    </Container>
  );
};

export default Controls;
