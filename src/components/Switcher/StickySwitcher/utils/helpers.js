export const SLIDE_TOP_DESKTOP = slide => slide.offsetTop - 250;

export const SLIDE_TOP_MOBILE = slide => slide.offsetTop - 150;

export const scrollToControl = controlId => {
  const control = document.getElementById(controlId);
  if (!control) {
    console.error('Control not found:', controlId);
    return;
  }

  const container = control.parentElement;
  const scrollLeft =
    control.offsetLeft - container.offsetWidth / 2 + control.offsetWidth / 2;

  container.scrollTo({
    left: scrollLeft,
    behavior: 'smooth',
  });
};

export const handleScroll = ({ slideId, setActiveSlide }) => {
  const control = document.getElementById(`control-${slideId}`);
  const slide = document.getElementById(slideId);

  if (!control || !slide) {
    console.error('Slide or control not found:', slideId);
    return;
  }

  scrollToControl(`control-${slideId}`);

  if (window.innerWidth >= 835) {
    window.scrollTo({
      top: SLIDE_TOP_DESKTOP(slide),
      behavior: 'smooth',
    });
  } else {
    window.scrollTo({
      top: SLIDE_TOP_MOBILE(slide),
      behavior: 'smooth',
    });
  }

  setActiveSlide(slideId);
};
