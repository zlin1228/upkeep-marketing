export const scrollToTop = (y) => {
  const c = y || 0;
  window.scrollTo({
    top: c,
    behavior: "smooth",
  });
};

export const scrollToForm = (elementId) => {
  if (!!elementId) return
  let demoForm = document.getElementById(elementId).getBoundingClientRect();
  let currentY = window.scrollY
  scrollToTop(currentY + demoForm.top - 50)
}


export const scrollHandler = (id, sticky) => {
  if (!!id) return
  let rect = document.getElementById(id).getBoundingClientRect();
  if (sticky.current && sticky.current.classList) {
    if (rect?.top < -600 || rect?.top>500) {
      sticky.current.classList.add('is-away')
    } else {
      sticky.current.classList.remove('is-away')
    }
  }
}