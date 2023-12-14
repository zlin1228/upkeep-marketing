export const fetchCategories = data => {
  const categories = data.map(item => item?.category?.internalName);
  return [...new Set(categories)];
};

export const handleClick = (
  category,
  activeCategories,
  setActiveCategories
) => {
  if (activeCategories.includes(category)) {
    setActiveCategories(activeCategories.filter(item => item !== category));
  } else {
    setActiveCategories([...activeCategories, category]);
  }
};
