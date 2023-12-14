const scrollToElementTop = (element, offset) => {
  const elementTop = element.getBoundingClientRect().top;
  const scrollTop = document.documentElement.scrollTop;
  const scrollPosition = elementTop + scrollTop - offset;
  window.scrollTo({ scrollPosition, behavior: 'smooth' });
};

export default scrollToElementTop;
