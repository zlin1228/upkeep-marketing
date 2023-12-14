import React from 'react';
import { color } from '../../../atoms/colors';
import Icon from '../../../molecules/Icon';
import {
  Dot,
  NextArrow,
  PrevArrow,
} from '../styles/TestimonialCarousel.styled';

export default {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  mobileFirst: true,
  cssEase: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  customPaging() {
    return <Dot type="buton" aria-label="Carousel Pagination" />;
  },
  nextArrow: (
    <NextArrow aria-label="Next Button">
      <Icon
        id="fa-regular fa-chevron-right"
        fillColor={color.mediumGrey[400]}
        width="20px"
        height="20px"
      />
    </NextArrow>
  ),
  prevArrow: (
    <PrevArrow aria-label="Prev Button">
      <Icon
        id="fa-regular fa-chevron-left"
        fillColor={color.mediumGrey[400]}
        width="20px"
        height="20px"
      />
    </PrevArrow>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
