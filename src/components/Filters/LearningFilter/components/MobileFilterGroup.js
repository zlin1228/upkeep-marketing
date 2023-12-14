import React, { useState } from 'react';
import Icon from '../../../../molecules/Icon';
import FilterItem from './FilterItem';
import { color } from '../../../../atoms/colors';
import { Container, Button, Filters } from '../styles/MobileFilterGroup.styled';

const MobileFilterGroup = ({
  type,
  categories,
  activeFilters,
  setActiveFilters,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container>
      <Button
        key={type}
        type="button"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {type}
        <Icon id="fa-solid fa-chevron-down" fillColor={color.darkBlue[900]} />
      </Button>
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
    </Container>
  );
};

export default MobileFilterGroup;
