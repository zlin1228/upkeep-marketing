const formatUrlValue = location => {
  if (!location) return '';
  const prevPage = localStorage.getItem('prevPage');

  if (prevPage && location?.search) {
    return `${location.href}&referring_source=${prevPage}`;
  }

  if (prevPage) {
    return `${location.href}?referring_source=${prevPage}`;
  }

  return `${location.href}`;
};

export default formatUrlValue;
