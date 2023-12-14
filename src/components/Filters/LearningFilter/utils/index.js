const capitalize = string => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const sortCategories = array => {
  const categoryTypes = [...new Set(array.map(c => c?.categoryType))];
  return categoryTypes.map(type => ({
    type: capitalize(type),
    categories: array.filter(c => c?.categoryType === type),
  }));
};

export const getCategories = posts => {
  const categories = posts.map(node => node?.categories).flat();
  return sortCategories(
    categories.filter(
      (value, index, self) =>
        index === self.findIndex(t => t.name === value.name)
    )
  );
};

export const filterPosts = (posts, activeFilters) => {
  const filteredPosts = posts.filter(post => {
    const postCategories = post.categories;
    const results = postCategories.filter(category => {
      if (activeFilters.includes(category?.safeName)) return category;
    });
    if (results?.length > 0) return post;
  });

  if (filteredPosts?.length > 0) return filteredPosts;
  return posts;
};

export const getRelatedPosts = (currentPost, posts) => {
  if (currentPost?.relatedPosts?.length > 0) return currentPost.relatedPosts;
  const postsByCategory = posts
    .filter(post => {
      return post?.categories.some(category =>
        currentPost?.categories.some(cat => cat.name === category.name)
      );
    })
    ?.map(node => node);
  if (postsByCategory?.length >= 3) {
    return postsByCategory.slice(0, 3);
  }
  return posts?.map(node => node).slice(0, 3);
};

export const handleFilter = (filter, activeFilters, setActiveFilters) => {
  if (activeFilters.includes(filter)) {
    setActiveFilters(
      activeFilters.filter(activeFilter => activeFilter !== filter)
    );
  } else {
    setActiveFilters([...activeFilters, filter]);
  }
};
