const truncateUrl = (url, length) => {
  if (!url) return '';

  const truncatedUrl = url.substring(0, length || 254);
  return truncatedUrl;
};

export default truncateUrl;
