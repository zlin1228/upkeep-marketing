import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import FilterGroup from './components/FilterGroup';
import { getCategories } from './utils';
import FilterIcon from '../../../assets/filter-icon.svg';
import { Container, Header } from './styles/index.styled';

const LearningFilter = ({ posts, activeFilters, setActiveFilters }) => {
  const { t } = useTranslation();
  const categories = getCategories(posts);
  return (
    <Container>
      <Header>
        <p className="heading">
          {t('Filter')}
          <img src={FilterIcon} alt="filter-icon" />
        </p>
        <button
          type="button"
          className="clear-btn"
          onClick={() => setActiveFilters([])}
        >
          {t('Clear All')}
        </button>
      </Header>
      {categories?.map(group => (
        <FilterGroup
          key={group?.type}
          component={group}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      ))}
    </Container>
  );
};

export default LearningFilter;
