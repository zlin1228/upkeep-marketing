import React, { useState } from 'react';
import Icon from '../../../../molecules/Icon';
import FilterItem from './FilterItem';
import { color } from '../../../../atoms/colors';
import { Container, Button, Filters } from '../styles/FilterGroup.styled';

const FilterGroup = ({ component, activeFilters, setActiveFilters }) => {
  const [expanded, setExpanded] = useState(true);

  if (!component) return null;
  const { type, categories } = component;

  return (
    <Container className="filter-group" expanded={expanded}>
      <Button expanded={expanded} onClick={() => setExpanded(!expanded)}>
        {type && type}
        <Icon id="fa-solid fa-chevron-down" fillColor={color.darkBlue[900]} />
      </Button>
      {categories && categories?.length > 0 && (
        <Filters expanded={expanded}>
          {categories.map(cat => (
            <FilterItem
              key={cat?.safeName}
              {...cat}
              active={activeFilters.includes(cat?.safeName)}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          ))}
        </Filters>
      )}
    </Container>
  );
};

export default FilterGroup;
