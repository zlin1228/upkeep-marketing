export const filterPosts = (posts, category) => {
  if (!category) return posts;
  return posts.filter(post => post?.category?.slug === category);
};
