import React from 'react';
import StarIcon from '../assets/star.svg';

export const formatReviewer = reviewer => ({
  name: `${reviewer?.firstName || ''} ${reviewer?.lastName || ''}`,
  role: reviewer?.role || '',
});

export const formatDetails = (
  keyFeatures,
  industry,
  source,
  reviewSourceUrl
) => {
  const details = [];
  if (keyFeatures) {
    details.push({
      heading: 'Key Features',
      subhead: keyFeatures,
    });
  }
  if (industry?.name) {
    details.push({
      heading: 'Industry',
      subhead: industry.name,
    });
  }
  if (source) {
    details.push({
      heading: 'Review Source',
      subhead: source,
      button: reviewSourceUrl && {
        url: reviewSourceUrl,
        label: 'Read full review',
      },
    });
  }
  return { details };
};

export const renderRating = rating => {
  const rate = Array.from(Array(rating || 5).keys());
  return (
    <>
      {rate.map((_, index) => (
        <img key={index} src={StarIcon} alt="Star" />
      ))}
    </>
  );
};
