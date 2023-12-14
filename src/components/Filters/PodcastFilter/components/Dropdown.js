import React, { useState } from 'react';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';
import { Container, List } from '../styles/Dropdown.styled';

const Dropdown = ({ options, activeCategory, setActiveCategory }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Container>
      <button
        type="button"
        className="dropdown"
        onClick={() => setExpanded(!expanded)}
      >
        Categories
        <Icon
          id={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`}
          width="20px"
          height="20px"
        />
      </button>
      <List className={expanded ? 'active' : ''}>
        {options?.map(option => (
          <li key={option?.category}>
            <button
              type="button"
              className="filter-button"
              onClick={() => {
                if (activeCategory === option?.category) {
                  setActiveCategory('Categories');
                  return;
                }
                setActiveCategory(option?.category);
              }}
            >
              <Icon
                id={
                  activeCategory === option?.category
                    ? `fa-solid fa-square-check`
                    : `fa-regular fa-square`
                }
                width="15px"
                height="15px"
                fillColor={color.primary[700]}
              />
              {`${option?.category} (${option?.postCount})`}
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Dropdown;
