import { useEffect } from 'react';

const useLazyLoadSlider = () => {
  const getSlideTrackWidth = () => {
    const slickTrack = document.querySelector('.slick-track');
    if (!slickTrack) return;

    const slickTrackWidth = slickTrack.style.width;
    if (!slickTrackWidth) return;

    const slickTrackWidthNumber = Number(slickTrackWidth?.split('px')[0]);
    return slickTrackWidthNumber;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const trackWidth = getSlideTrackWidth();
      const slides = document.querySelectorAll('.slick-slide');

      if (trackWidth > 0) {
        clearInterval(interval);
        slides.forEach(slide => {
          slide.style.visibility = 'visible';
        });
      }
    }, 100);
  }, []);
};

export default useLazyLoadSlider;
