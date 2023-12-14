import React from 'react';
import CheckedIcon from './assets/checked.svg';
import UncheckedIcon from './assets/unchecked.svg';
import { fetchCategories, handleClick } from './utils/helpers';
import { Container, List, Button } from './styles/index.styled';

const PartnershipsFilter = ({
  data,
  activeCategories,
  setActiveCategories,
}) => {
  const categories = fetchCategories(data);
  return (
    <Container className="partnerships-filter-desktop">
      <p className="heading">Categories</p>
      <List>
        {categories.map(category => {
          const isActive = activeCategories.includes(category);
          return (
            <li key={category}>
              <Button
                type="button"
                onClick={() =>
                  handleClick(category, activeCategories, setActiveCategories)
                }
              >
                <img
                  src={isActive ? CheckedIcon : UncheckedIcon}
                  alt="filter icon"
                />
                <span>{category}</span>
              </Button>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default PartnershipsFilter;
