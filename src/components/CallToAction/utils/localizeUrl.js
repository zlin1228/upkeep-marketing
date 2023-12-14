const localizeUrl = (pathname, url) => {
  if (pathname.includes('/es/')) {
    if (url.startsWith('/')) {
      return `/es${url}`;
    }

    return `${url.split('.com')[0]}.com/es${url.split('.com')[1]}`;
  }

  return url;
};

export default localizeUrl;
