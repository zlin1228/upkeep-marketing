export default (array, filter) => {
  return [...array].sort((a, b) => {
    const aDate = new Date(a?.publishDate);
    const bDate = new Date(b?.publishDate);
    return filter === 'ASC' ? aDate - bDate : bDate - aDate;
  });
};
