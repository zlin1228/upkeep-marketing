import React, { useEffect } from 'react';

import Icon from '../../../../molecules/Icon';

import { handleScroll } from '../utils/helpers';
import {
  Container,
  Button,
  Wrapper,
  controlColorMap,
} from '../styles/Controls.styled';

const Controls = ({ theme, slides, activeSlide, setActiveSlide }) => {
  useEffect(() => {
    const container = document.querySelector('.sticky-switcher-controls');
    const sticky = container.offsetTop;

    const scrollListener = () => {
      if (window.pageYOffset > sticky) {
        container.classList.add('scrolled');
      } else {
        container.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container className="sticky-switcher-controls" theme={theme}>
      <Wrapper>
        {slides?.map(slide => (
          <Button
            key={slide.id}
            id={`control-${slide.id}`}
            type="button"
            onClick={() => handleScroll({ slideId: slide.id, setActiveSlide })}
            className={activeSlide === slide.id ? 'active' : ''}
            borderColor={controlColorMap[slide.controlIconColor]}
            theme={theme}
          >
            <Icon
              id={slide.controlIcon}
              width="24px"
              height="24px"
              fillColor={controlColorMap[slide.controlIconColor]}
            />
            {slide?.label}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Controls;
