import React from 'react';
import { handleFilter } from '../utils';
import { color } from '../../../../atoms/colors';
import { Filter, IconContainer } from '../styles/FilterItem.styled';
import Icon from '../../../../molecules/Icon';

const FilterItem = ({
  name,
  safeName,
  active,
  activeFilters,
  setActiveFilters,
}) => (
  <Filter
    onClick={() => handleFilter(safeName, activeFilters, setActiveFilters)}
  >
    <IconContainer>
      <Icon
        id={active ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}
        width="16px"
        height="16px"
        fillColor={color.primary[700]}
      />
    </IconContainer>
    {name}
  </Filter>
);

export default FilterItem;
