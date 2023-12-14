const sortIndustries = reviews => {
  const industries = reviews
    .map(review => review.industry?.name)
    .filter(i => i !== undefined);

  const uniqueIndustries = [...new Set(industries)];

  const industryCount = uniqueIndustries.map(industry => {
    return industries.filter(i => i === industry).length;
  });

  return uniqueIndustries.map((industry, index) => {
    return {
      name: industry,
      count: industryCount[index],
    };
  });
};

const sortFilters = (reviews, key) => {
  if (key === 'industry') return sortIndustries(reviews);

  const uniqueFilters = [
    ...new Set(
      reviews.map(review => {
        return review[key];
      })
    ),
  ];

  const filterCount = uniqueFilters.map(filter => {
    return reviews.filter(review => review[key] === filter).length;
  });

  return uniqueFilters.map((filter, index) => {
    return { name: filter, count: filterCount[index] };
  });
};

export const fetchFilters = reviews => {
  if (!reviews) return null;

  return {
    sources: {
      key: 'sources',
      name: 'Source',
      data: sortFilters(reviews, 'source'),
    },
    products: {
      key: 'products',
      name: 'Product',
      data: sortFilters(reviews, 'product'),
    },
    industries: {
      key: 'industries',
      name: 'Industry',
      data: sortFilters(reviews, 'industry'),
    },
  };
};

export const filterReviews = (reviews, activeFilters) => {
  if (!reviews) return null;
  const { sources, products, industries } = activeFilters;
  const filteredReviews = reviews.filter(review => {
    return (
      sources.includes(review?.source) ||
      products.includes(review?.product) ||
      industries.includes(review?.industry?.name)
    );
  });
  if (filteredReviews.length === 0) return reviews;
  return filteredReviews;
};
