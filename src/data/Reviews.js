import React from 'react';
import SocialStars from '../components/SocialProof/SocialStars';

export const reviewStats = [
  {
    stat: <SocialStars />,
    title: '5/5 Average Rating',
  },
  {
    stat: '300+',
    title: 'Unique Reviews',
  },
  {
    stat: '1000+',
    title: 'Happy Customers',
  },
];
export const products = reviews => {
  return {
    title: 'Product',
    filters: [
      ...new Set(
        reviews
          .map(({ node }) => node.product)
          .filter(item => item !== undefined && item !== '')
      ),
    ],
  };
};
export const industries = reviews => {
  return {
    title: 'Industry',
    filters: [
      ...new Set(
        reviews
          .map(({ node }) => node?.industry?.name)
          .filter(item => item !== undefined && item !== '')
      ),
    ],
  };
};
export const teamsize = reviews => {
  return {
    title: 'Team Size',
    filters: [
      ...new Set(
        reviews
          .map(({ node }) => node?.teamSize)
          .filter(item => item !== null && item !== '')
      ),
    ],
  };
};
