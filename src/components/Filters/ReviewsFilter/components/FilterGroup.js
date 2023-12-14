import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { handleFilter } from '../utils';
import Icon from '../../../../molecules/Icon';
import {
  Container,
  Button,
  List,
  ListItem,
  Filter,
  Checkbox,
} from '../styles/FilterGroup';

const FilterGroup = ({ component, activeFilters, setActiveFilters }) => {
  const { width } = useWindowSize();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (width < 1170) {
      setExpanded(false);
    }
  }, [width]);

  if (!component) return null;
  const { key, name, data } = component;

  return (
    <Container expanded={expanded}>
      <Button
        type="button"
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {name}
        <Icon id="fa-solid fa-chevron-down" width="20px" height="20px" />
      </Button>
      <List expanded={expanded}>
        {data.map(item => {
          const filterActive = activeFilters[key].includes(item?.name);
          return (
            <ListItem key={item?.key}>
              <Filter
                type="button"
                onClick={() =>
                  handleFilter(key, item?.name, activeFilters, setActiveFilters)
                }
              >
                <Checkbox className={filterActive ? 'active' : ''}>
                  <Icon id="fa-solid fa-check" fillColor="#ffffff" />
                </Checkbox>
                {item?.name}
              </Filter>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default FilterGroup;
