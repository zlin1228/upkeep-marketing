const filterByCategory = (array, value) => {
  if (!array) return [];
  return array.filter(podcast => podcast?.node?.categories?.name === value);
};

export default (podcasts, activeCategory, setActivePodcasts) => {
  if (activeCategory !== 'Categories') {
    const filteredPodcasts = filterByCategory(podcasts, activeCategory);
    setActivePodcasts(filteredPodcasts);
  } else setActivePodcasts(podcasts);
};
