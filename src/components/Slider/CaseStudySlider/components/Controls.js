import React from 'react';
import { Container, Wrapper, Button } from '../styles/Controls.styled';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';

const Controls = ({
  slides,
  sliderRef,
  activeSlideIndex,
  setActiveSlideIndex,
}) => {
  const handlePrev = () => {
    if (activeSlideIndex !== 0) {
      sliderRef.current.slickGoTo(activeSlideIndex - 1);
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeSlideIndex < slides.length - 1) {
      sliderRef.current.slickGoTo(activeSlideIndex + 1);
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Button onClick={() => handlePrev()}>
          <Icon
            id="fa-solid fa-chevron-left"
            width="14px"
            height="14px"
            color={color.grey[900]}
          />
        </Button>
        <Button onClick={() => handleNext()}>
          <Icon
            id="fa-solid fa-chevron-right"
            width="14px"
            height="14px"
            color={color.grey[900]}
          />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Controls;
