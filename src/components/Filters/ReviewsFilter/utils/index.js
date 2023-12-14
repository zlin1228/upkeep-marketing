export const handleFilter = (key, filter, activeFilters, setActiveFilters) => {
  const currentFiltersArray = activeFilters[key];

  if (currentFiltersArray.includes(filter)) {
    const newFiltersArray = currentFiltersArray.filter(
      currentFilter => currentFilter !== filter
    );

    setActiveFilters({
      ...activeFilters,
      [key]: newFiltersArray,
    });
  }

  if (!currentFiltersArray.includes(filter)) {
    const newFiltersArray = [...currentFiltersArray, filter];

    setActiveFilters({
      ...activeFilters,
      [key]: newFiltersArray,
    });
  }
};
