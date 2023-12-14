import sortAlphabetically from './sortAlphabetically';

const filterByIndustry = (array, value) => {
  if (!array) {
    return [];
  }

  return array.filter(node => node?.industry?.name === value);
};

export default (
  successStories,
  activeIndustry,
  activeFilter,
  setCustomerStories
) => {
  let filteredPosts = successStories;

  if (activeIndustry !== 'Industry' && activeIndustry !== 'Industria') {
    filteredPosts = filterByIndustry(successStories, activeIndustry);
  }

  switch (activeFilter) {
    case 'Sort by Oldest':
      filteredPosts = [...filteredPosts].reverse();
      break;
    case 'Ordenar por más antiguo':
      filteredPosts = [...filteredPosts].reverse();
      break;
    case 'Alphabetically A-Z':
      filteredPosts = sortAlphabetically(filteredPosts, 'A-Z');
      break;
    case 'Alfabéticamente A-Z':
      filteredPosts = sortAlphabetically(filteredPosts, 'A-Z');
      break;
    case 'Alphabetically Z-A':
      filteredPosts = sortAlphabetically(filteredPosts, 'Z-A');
      break;
    case 'Alfabéticamente Z-A':
      filteredPosts = sortAlphabetically(filteredPosts, 'Z-A');
      break;
    default:
      break;
  }

  setCustomerStories(filteredPosts);
};
