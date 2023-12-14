const handleBlur = setInputFocused => {
  document.addEventListener('click', e => {
    const tagName = e.target.tagName;
    const id = e.target.id;
    if (tagName === 'A' || tagName === 'INPUT' || id === 'defaultSearchBar') {
      setInputFocused(true);
      return;
    }
    setInputFocused(false);
  });
};

export default handleBlur;
