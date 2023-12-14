import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Icon from '../../../../molecules/Icon';
import { color } from '../../../../atoms/colors';
import { Container, List } from '../styles/Dropdown.styled';

const Dropdown = ({ categories, activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(true);

  return (
    <Container>
      <button
        type="button"
        className="dropdown"
        onClick={() => setExpanded(!expanded)}
      >
        {t('Categories')}
        <Icon
          id={`fa-solid fa-chevron-${expanded ? 'up' : 'down'}`}
          width="20px"
          height="20px"
        />
      </button>
      <List className={expanded ? 'active' : ''}>
        {categories?.map(({ internalName, slug }) => (
          <li key={slug}>
            <button
              type="button"
              className="filter-button"
              onClick={() => {
                if (activeCategory === slug) {
                  setActiveCategory('');
                  return;
                }
                setActiveCategory(slug);
              }}
            >
              <Icon
                id={
                  activeCategory === slug
                    ? `fa-solid fa-square-check`
                    : `fa-regular fa-square`
                }
                width="15px"
                height="15px"
                fillColor={color.primary[700]}
              />
              {internalName}
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Dropdown;
