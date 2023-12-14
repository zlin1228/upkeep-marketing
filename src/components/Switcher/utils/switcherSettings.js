export const horizontalSwitcherSettings = setActiveSlideIndex => ({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  afterChange(currentSlide) {
    setActiveSlideIndex(currentSlide);
  },
});

export const SwitchbackSwitcherSettings = (setActiveSlideIndex, draggable) => ({
  dots: false,
  infinite: true,
  fade: true,
  draggable: draggable || false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  afterChange(currentSlide) {
    setActiveSlideIndex(currentSlide);
  },
});
