const fetchCategories = podcasts => {
  const allCats = [];
  podcasts.map(podcast => {
    allCats.push(podcast?.node?.categories?.name);
  });
  return [...new Set(allCats)];
};

export const fetchCatsWithCount = podcasts => {
  const categories = fetchCategories(podcasts);

  const categoriesWithPostCount = categories.map(category => {
    const postCount = podcasts.filter(
      podcast => podcast?.node?.categories?.name === category
    ).length;

    return {
      category,
      postCount,
    };
  });
  return categoriesWithPostCount;
};
