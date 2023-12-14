export const sliderSettings = (setActiveSlideIndex, infinite) => ({
  dots: false,
  arrows: false,
  infinite: infinite || false,
  centerMode: !!infinite,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  afterChange: index => setActiveSlideIndex(index),
});

export const getSlideWidth = () =>
  window.innerWidth > 499 ? '402px' : '324px';
