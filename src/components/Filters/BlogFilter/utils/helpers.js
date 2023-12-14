export const fetchBlogCategories = posts => {
  const categories = posts.map(post => post?.category);
  const uniqueCategories = categories.filter(
    (category, index, self) =>
      index === self.findIndex(t => t?.internalName === category?.internalName)
  );

  const filteredCategories = uniqueCategories.filter(
    category => category !== null && category !== undefined
  );

  const sortedCategories = filteredCategories.sort((a, b) => {
    if (a?.slug < b?.slug) return -1;
    if (a?.slug > b?.slug) return 1;
    return 0;
  });
  const categoriesWithPostCount = sortedCategories.map(category => {
    const postCount = categories.filter(
      cat => cat?.internalName === category?.internalName
    ).length;

    return {
      ...category,
      postCount,
    };
  });

  return categoriesWithPostCount;
};
