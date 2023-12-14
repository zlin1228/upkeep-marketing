export const handleFilter = (parterships, activeCategories) => {
  if (activeCategories.length === 0) {
    return parterships;
  }
  return parterships.filter(item => {
    return activeCategories.includes(item.category?.internalName);
  });
};
