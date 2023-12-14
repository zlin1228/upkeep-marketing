const handleFilters = (text, option, activeFilter, setActiveFilter) => {
  if (activeFilter === option && text === 'Type') {
    setActiveFilter('Type');
    return;
  }
  if (activeFilter === option && text === 'Topic') {
    setActiveFilter('Topic');
    return;
  }
  setActiveFilter(option);
};

export default handleFilters;
