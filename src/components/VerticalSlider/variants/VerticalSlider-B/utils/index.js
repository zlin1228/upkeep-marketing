import { breakpointNumbers } from '../../../../../atoms/breakpoints';

export const onScroll = ({ setActiveSlide, controlsRef, buttonRefs }) => {
  const slides = document.querySelectorAll('.vertical-slide');

  slides.forEach((slide, index) => {
    const desktopOffset = 270;
    const mobileOffset = 150;

    const rect = slide.getBoundingClientRect();
    const offset =
      window.innerWidth >= breakpointNumbers.xl ? desktopOffset : mobileOffset;

    if (rect.top <= offset && rect.top + rect.height > offset) {
      if (controlsRef && controlsRef?.current) {
        const controlsWrapper = controlsRef.current;

        if (buttonRefs && buttonRefs?.current) {
          const buttonOffset = Array.from(buttonRefs)
            .slice(0, index)
            .reduce((acc, ref) => acc + ref.current.offsetWidth, 0);

          controlsWrapper.scrollTo({
            left: buttonOffset - 32,
            behavior: 'smooth',
          });
        } else {
          const buttonOffset = controlsWrapper.clientWidth / slides.length;

          controlsWrapper.scrollTo({
            left: buttonOffset * index,
            behavior: 'smooth',
          });
        }
      }

      setActiveSlide(index);
    }
  });
};

export const handleScroll = ({ id }) => {
  const desktopOffset = 250;
  const mobileOffset = 130;

  const slide = document.getElementById(id);
  const rect = slide.getBoundingClientRect();
  const offset =
    window.innerWidth > breakpointNumbers.xl ? desktopOffset : mobileOffset;
  const elementPosition = rect.top + window.pageYOffset - offset;

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth',
  });
};
