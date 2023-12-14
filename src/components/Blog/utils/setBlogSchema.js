import UpKeepLogo from '../../../assets/logo-header-light.svg';

export default post => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
  },
  image: post?.metaTags?.image?.url,
  thumbnailUrl: post?.metaTags?.image?.url,
  headline: post?.metaTags?.title,
  description: post?.metaTags?.description,
  datePublished: new Date(post?.publishDate)?.toISOString(),
  author: {
    '@type': 'Person',
    name: `${post?.author?.firstName} ${post?.author?.lastName}`,
    url: `https://www.onupkeep.com/blog/author/${post?.author?.firstName?.toLowerCase()}-${post?.author?.lastName?.toLowerCase()}`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'UpKeep',
    logo: {
      '@type': 'ImageObject',
      url: UpKeepLogo,
    },
  },
});
