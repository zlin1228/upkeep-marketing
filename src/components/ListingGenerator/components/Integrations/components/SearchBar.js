import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Icon from '../../../../../molecules/Icon';
import { Container, SearchIcon } from '../styles/SearchBar';

const SearchBar = ({ searchValue, handleSearch }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <SearchIcon>
        <Icon id="fa-solid fa-magnifying-glass" width="14px" height="14px" />
      </SearchIcon>
      <input
        value={searchValue}
        type="text"
        name="search"
        id="search"
        placeholder={t('Search for Integration')}
        autoComplete="off"
        onChange={e => handleSearch(e)}
      />
    </Container>
  );
};

export default SearchBar;
