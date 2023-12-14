const handleFilters = (text, option, activeFilter, setActiveFilter) => {
  if (activeFilter === option && text === 'Type') {
    setActiveFilter('Type');
    return;
  }
  if (activeFilter === option && text === 'Category') {
    setActiveFilter('Category');
    return;
  }
  setActiveFilter(option);
};

export default handleFilters;
