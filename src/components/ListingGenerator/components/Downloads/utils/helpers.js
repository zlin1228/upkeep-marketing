export const getDownloadTypes = downloads => {
  if (!downloads) return [];
  const downloadsTypes = downloads
    .map(({ node }) => node?.downloadsType?.name)
    .filter(item => item !== undefined);
  const uniqueDownloadsTypes = [...new Set(downloadsTypes)];
  uniqueDownloadsTypes.unshift('Type');
  return uniqueDownloadsTypes;
};

export const getDownloadCategories = downloads => {
  if (!downloads) return [];
  const downloadCategories = downloads
    .map(({ node }) => node?.category?.name)
    .filter(item => item !== undefined);
  const uniqueDownloadCategories = [...new Set(downloadCategories)];
  uniqueDownloadCategories.unshift('Topic');
  return uniqueDownloadCategories;
};

export const filterPosts = (posts, type, category) => {
  const postsDuplicate = [...posts];
  if (type === 'Type' && category === 'Topic') return posts;
  if (type === 'Type' && category !== 'Topic') {
    return postsDuplicate.filter(
      ({ node }) => node?.category?.name === category
    );
  }
  if (type !== 'Type' && category === 'Topic') {
    return postsDuplicate.filter(
      ({ node }) => node?.downloadsType?.name === type
    );
  }
  if (type !== 'Type' && category !== 'Topic') {
    return postsDuplicate.filter(
      ({ node }) =>
        node?.downloadsType?.name === type && node?.category?.name === category
    );
  }
};
