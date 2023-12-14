const handleInputAutoFocus = (name, focus) => {
  const input = document.querySelector(`input[name="${name}"]`);
  if (input) {
    input.setAttribute('autofocus', focus.toString());
  }
};
export default handleInputAutoFocus;
