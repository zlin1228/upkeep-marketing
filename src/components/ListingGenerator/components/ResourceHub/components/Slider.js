import React from 'react';
import SlickSlider from 'react-slick';
import Slide from './Slide';
import { Container, Overlay } from '../styles/Slider.styled';

export const heroCarouselSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
};

const Slider = ({ data, type }) => (
  <Container>
    <SlickSlider {...heroCarouselSettings}>
      {data?.map(item => (
        <Slide key={item?.id} component={{ ...item, type }} />
      ))}
    </SlickSlider>
    <Overlay />
  </Container>
);

export default Slider;
