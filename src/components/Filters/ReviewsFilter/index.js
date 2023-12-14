import React from 'react';
import FilterGroup from './components/FilterGroup';
import { Container } from './styles/index.styled';

const ReviewsFilter = ({ component, activeFilters, setActiveFilters }) => {
  if (!component) return null;
  const { sources, products, industries } = component;

  return (
    <Container>
      <FilterGroup
        component={products}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <FilterGroup
        component={industries}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <FilterGroup
        component={sources}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    </Container>
  );
};

export default ReviewsFilter;
