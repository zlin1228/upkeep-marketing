import sortByDate from './sortByDate';
import sortAlphabetically from './sortAlphabetically';

export default (array, filter) => {
  const Filters = {
    'Sort by Newest': sortByDate(array, 'DESC'),
    'Ordenar por más reciente': sortByDate(array, 'DESC'),
    'Sort by Oldest': sortByDate(array, 'ASC'),
    'Ordenar por más antiguo': sortByDate(array, 'ASC'),
    'Alphabetically A-Z': sortAlphabetically(array, 'A-Z'),
    'Alfabéticamente A-Z': sortAlphabetically(array, 'A-Z'),
    'Alphabetically Z-A': sortAlphabetically(array, 'Z-A'),
    'Alfabéticamente Z-A': sortAlphabetically(array, 'Z-A'),
  };
  return Filters[filter];
};
