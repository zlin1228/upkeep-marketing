const handleDraggable = setDraggable => {
  if (window.innerWidth <= 992) {
    setDraggable(true);
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  });
};

export default handleDraggable;
