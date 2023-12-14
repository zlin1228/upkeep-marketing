export const sliderSettings = (setActiveSlideIndex, infinite) => ({
  dots: false,
  arrows: false,
  infinite: infinite || false,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0.9,
  variableWidth: true,
  afterChange: index => setActiveSlideIndex(index),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        initialSlide: 0,
      },
    },
    {
      breakpoint: 576,
      settings: {
        initialSlide: 0,
        centerMode: false,
      },
    },
  ],
});
