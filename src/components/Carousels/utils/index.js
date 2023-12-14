import React from 'react';

export const heroCarouselSettings = setActiveSlideIndex => ({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 7500,
  afterChange: index => setActiveSlideIndex(index),
});
export const generateCarouselHeading = type => {
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1);
  if (type === 'blog') return `Most Recent ${formattedType} Stories`;
  if (type === 'learning') return `Most Recent ${formattedType} Articles`;
  return `Most Recent ${formattedType}`;
};
export const getCardType = datoId => {
  if (datoId?.includes('DatoCmsBlogPost')) return 'Blog';
  if (datoId?.includes('DatoCmsLearning')) return 'Learning';
  if (datoId?.includes('DatoCmsTemplateCollection')) return 'Template';
  if (datoId?.includes('DatoCmsEvent')) return 'Event';
  if (datoId?.includes('DatoCmsTool')) return 'Tool';
  if (datoId?.includes('DatoCmsDownload')) return 'Download';
  if (datoId?.includes('DatoCmsPodcast')) return 'Podcast';
};
export const generateSlug = (id, slug) => {
  if (id?.includes('DatoCmsBlogPost')) return `/blog/${slug}`;
  if (id?.includes('DatoCmsLearning')) return `/learning/${slug}`;
  if (id?.includes('DatoCmsTemplateCollection')) return `/templates/${slug}`;
  if (id?.includes('DatoCmsEvent')) return `/events/${slug}`;
  if (id?.includes('DatoCmsTool')) return `${slug}`;
  if (id?.includes('DatoCmsDownload')) return `/downloads/${slug}`;
  if (id?.includes('DatoCmsPodcast')) return `/podcasts/${slug}`;
  return '/resources/asset-operations-maintenance-hub';
};
export const setImageSrc = component => {
  return (
    component?.image ||
    component?.thumbnailImage?.image?.gatsbyImageData ||
    component?.thumbnailImage?.gatsbyImageData ||
    component?.thumbnail?.image?.gatsbyImageData ||
    component?.metaTags?.image?.gatsbyImageData ||
    component?.podcastVideo?.[0]?.websiteVideo?.videoThumbnail?.image
      ?.gatsbyImageData
  );
};
export const checkBlogImages = firstBlogImage => {
  if (
    firstBlogImage.includes('.png') ||
    firstBlogImage.includes('.jpg') ||
    firstBlogImage.includes('.jpeg') ||
    firstBlogImage.includes('.gif')
  ) {
    return <img className="w-100" src={firstBlogImage} alt="any" />;
  }
};
