const fetchCategories = integrations => {
  const categories = integrations.map(integration => integration?.category);

  const uniqueCategories = categories.filter(
    (category, index, self) =>
      index === self.findIndex(t => t?.originalId === category?.originalId)
  );

  const filteredCategories = uniqueCategories.filter(
    category => category !== null
  );

  const sortedCategories = filteredCategories.sort((a, b) => {
    const nameA = a?.internalName.toUpperCase();
    const nameB = b?.internalName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return sortedCategories.map(category => {
    const count = integrations?.filter(
      integration => integration?.category?.originalId === category?.originalId
    )?.length;
    return { ...category, count };
  });
};

export default fetchCategories;
