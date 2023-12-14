import { breakpointNumbers } from '../../../atoms/breakpoints';

const responsiveSettings = [
  {
    breakpoint: breakpointNumbers.sm,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: breakpointNumbers.xl,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },

  {
    breakpoint: breakpointNumbers.xxl,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
];

export const getSlidesToShow = width => {
  const matchedSetting = responsiveSettings.find(
    ({ breakpoint }) => width <= breakpoint
  );

  const slidesToShow = matchedSetting
    ? matchedSetting.settings.slidesToShow
    : 3;

  return slidesToShow;
};

export const settings = setActiveSlideIndex => ({
  infinite: false,
  arrows: false,
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  afterChange: index => setActiveSlideIndex && setActiveSlideIndex(index),
  responsive: responsiveSettings,
});
