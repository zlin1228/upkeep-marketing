const handleFilters = (type, filters, setFilters, option) => {
  if (type === 'Industry' || type === 'Industria') {
    if (filters === option) setFilters('Industry');
    else setFilters(option);
  }
  if (type === 'Sort by' || type === 'Ordenar por') {
    if (filters === option) setFilters('Sort by Newest');
    else setFilters(option);
  }
};

export default handleFilters;
