export const sliderSettings = setActiveSlideIndex => ({
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        centerMode: true,
      },
    },
  ],
  afterChange: index => setActiveSlideIndex(index),
});
export const fullWidthSliderSettings = setActiveSlideIndex => ({
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  adaptiveHeight: true,
  afterChange: index => setActiveSlideIndex(index),
});
export const tertiarySliderSettings = setActiveSlideIndex => ({
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  afterChange: index => setActiveSlideIndex(index),
});

export const handleNext = (sliderRef, activeSlideIndex, numOfSlides) => {
  if (activeSlideIndex === numOfSlides - 1) {
    sliderRef.current.slickGoTo(0);
  } else {
    sliderRef.current.slickNext();
  }
};
export const handlePrev = (sliderRef, activeSlideIndex, numOfSlides) => {
  if (activeSlideIndex === 0) {
    sliderRef.current.slickGoTo(numOfSlides - 1);
  } else {
    sliderRef.current.slickPrev();
  }
};
export const getSlideWidth = () =>
  window.innerWidth > 499 ? '402px' : '324px';
export const getVideoSlideWidth = () =>
  window.innerWidth > 499 ? '398px' : '314px';
