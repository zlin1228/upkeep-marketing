export const handleNext = (sliderRef, activeSlide, numOfSlides) => {
  if (activeSlide < numOfSlides - 1) {
    sliderRef.current.slickNext();
  }
};
export const handlePrev = (sliderRef, activeSlide) => {
  if (activeSlide > 0) {
    sliderRef.current.slickPrev();
  }
};
