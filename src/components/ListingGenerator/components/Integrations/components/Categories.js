import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '../../../../../molecules/Icon';
import fetchCategories from '../utils/fetchCategories';
import { Container, Category } from '../styles/Categories';

const Categories = ({
  integrations,
  activeCategory,
  setIntegrationsByCategory,
}) => {
  const { t } = useTranslation();
  const categories = fetchCategories(integrations);

  return (
    <Container className="categories">
      <h6>{t('Categories')}</h6>
      <Category
        type="button"
        onClick={() => setIntegrationsByCategory('All')}
        active={(activeCategory === 'All').toString()}
      >
        <span className="category">All</span>
        {activeCategory === 'All' && (
          <Icon
            id="fa-regular fa-check"
            fillColor="#004a99"
            width="18px"
            height="18px"
          />
        )}
      </Category>
      {categories.map(cat => {
        const isActiveCategory = cat?.internalName === activeCategory;
        return (
          <Category
            type="button"
            key={cat?.id}
            onClick={() => setIntegrationsByCategory(cat?.internalName)}
            active={isActiveCategory.toString()}
          >
            <p className="category">
              {cat?.internalName} <span>({cat?.count})</span>
            </p>
            {isActiveCategory && (
              <Icon
                id="fa-regular fa-check"
                fillColor="#004a99"
                width="18px"
                height="18px"
              />
            )}
          </Category>
        );
      })}
    </Container>
  );
};

export default Categories;
