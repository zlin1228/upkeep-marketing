import React from 'react';
import { Dash } from '../styles/Controls.styled';
import Next from '../components/Next';
import Prev from '../components/Prev';

const basicSliderSettings = ({ sliderRef, setActiveSlide }) => ({
  customPaging: () => {
    return <Dash />;
  },
  dots: true,
  dotsClass: 'slick-dashes',
  arrows: true,
  nextArrow: <Next sliderRef={sliderRef} />,
  prevArrow: <Prev sliderRef={sliderRef} />,
  speed: 300,
  infinite: false,
  initialSlide: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  afterChange(currentSlide) {
    setActiveSlide(currentSlide);
  },
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

export default basicSliderSettings;
