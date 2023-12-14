export default data => ({
  categoryTags: data?.category,
  heading: data?.metaTags?.title,
  subhead: data?.metaTags?.description,
  featuredContent: {
    slug: `/blog/${data?.slug}`,
    thumbnail: {
      image: data?.metaTags?.image?.url,
      alt: data?.metaTags?.title,
    },
  },
  author: data?.author,
});
