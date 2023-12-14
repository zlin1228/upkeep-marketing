export default string => {
  const splitByImg = string?.split(/<img/);
  const lazyLoaded = splitByImg.map(item => {
    if (item.startsWith(' ')) return item.replace(/^/, 'loading="lazy" ');
    return item;
  });
  return lazyLoaded.join('<img ');
};
