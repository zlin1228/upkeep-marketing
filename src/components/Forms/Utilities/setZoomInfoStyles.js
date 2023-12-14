/**
 * @desc handles input element styles for ZoomInfo Form Complete
 */
export default () => {
  const inputFields = document.querySelectorAll('input');
  inputFields.forEach(input => {
    const feedback =
      input.type === 'tel'
        ? input.nextElementSibling.nextElementSibling
        : input.nextElementSibling;
    const inputDisplayStyle = getComputedStyle(input).display;

    if (inputDisplayStyle === 'none') {
      if (feedback !== null) {
        feedback.style.display = 'none';
      }
    } else if (
      inputDisplayStyle === 'block' &&
      input.className.includes('is-invalid')
    ) {
      if (feedback !== null) {
        feedback.style.display = 'block';
      }
    } else if (
      inputDisplayStyle === 'block' &&
      input.className.includes('is-valid')
    ) {
      if (feedback !== null) {
        feedback.style.display = 'none';
      }
    }
  });
};
