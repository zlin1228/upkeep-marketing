export const calculateScrollDistance = setScrollPosition => {
  const content = document.querySelector('.track-progress');
  const headerHeight = 86;
  const topScrollPosition = window.pageYOffset;
  const scrollTop = topScrollPosition - headerHeight;

  if (content !== null && topScrollPosition > headerHeight) {
    setScrollPosition(Math.floor((scrollTop / content.offsetHeight) * 100));
  } else {
    setScrollPosition(0);
  }
};

export const listenToScrollEvent = setScrollPosition => {
  document.addEventListener('scroll', () =>
    calculateScrollDistance(setScrollPosition)
  );
};
