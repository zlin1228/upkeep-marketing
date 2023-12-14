export const formatBlogPosts = array => {
  return array?.map(({ node }) => ({
    key: node?.id,
    slug: `/blog/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.metaTags?.subhead,
    image: node?.metaTags?.image?.gatsbyImageData,
    tags: ['Blog'],
    author: node?.author,
    publishedDate: node?.meta?.publishedAt,
  }));
};
export const formatLearningPosts = array => {
  return array?.map(({ node }) => ({
    key: node?.id,
    slug: `/learning/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.metaTags?.subhead,
    tags: ['Learning Center', node?.categories?.[0]?.name],
    callToAction: {
      label: 'Get download',
      url: `/learning/${node?.slug}`,
    },
  }));
};
export const formatDownloadsPosts = array => {
  return array?.map(({ node }, index) => ({
    key: node?.id,
    slug: `/downloads/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.subhead,
    image: node?.thumbnailImage?.gatsbyImageData,
    tags: ['Downloads', node?.downloadsType?.name],
    callToAction:
      index === 0
        ? {
            label: 'Get Download',
            url: `/downloads/${node?.slug}`,
          }
        : null,
    author: node?.author,
  }));
};
export const formatPodcastsPosts = array => {
  return array?.map(({ node }) => ({
    key: node?.id,
    slug: `/podcasts/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.subhead,
    image: node?.metaTags?.image?.gatsbyImageData,
    tags: ['Podcast', node?.categories?.name],
    author: node?.authorS?.[0],
  }));
};
export const formatTemplatePosts = array => {
  return array?.map(({ node }) => ({
    key: node?.id,
    slug: `/templates/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.subhead,
    image: node?.thumbnail?.image?.gatsbyImageData,
    tags: ['Learning Center', node?.category?.name],
    callToAction: {
      label: 'Download Template',
      url: `/templates/${node?.slug}`,
    },
  }));
};
export const formatEventsPosts = array => {
  return array?.map(({ node }, index) => ({
    key: node?.id,
    slug: `/events/${node?.slug}`,
    heading: node?.heading,
    subhead: node?.subhead,
    image: node?.thumbnailImage?.image?.gatsbyImageData,
    tags: ['Event', node?.startDate],
    callToAction:
      index === 0
        ? {
            label: 'View Event',
            url: `/events/${node?.slug}`,
          }
        : null,
    author: node?.authors?.[0],
  }));
};
