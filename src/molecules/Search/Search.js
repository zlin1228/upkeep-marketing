import React, { useState, useRef } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SearchResults from './SearchResults';
import Icon from '../Icon';
import useSearch from './utils/useSearch';
import handleBlur from './utils/helpers';
import { color } from '../../atoms/colors';
import {
  Container,
  Label,
  Input,
  IconContainter,
} from './styles/Search.styled';

const SearchBar = ({ data, placeholder, prefix, size = 'sm' }) => {
  const { t } = useTranslation();
  const { results, value, setValue } = useSearch(data);
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <Container
      id="defaultSearchBar"
      size={size}
      isSearched={value !== ''}
      isFocused={inputFocused}
      onFocus={() => setInputFocused(true)}
      onBlur={() => handleBlur(setInputFocused)}
    >
      <Label htmlFor="search" />
      <Input
        ref={inputRef}
        name="search"
        type="text"
        placeholder={placeholder || t('Search')}
        value={value}
        autoComplete="off"
        onChange={e => setValue(e.target.value)}
        size={size}
      />
      <SearchResults
        results={results}
        value={value}
        prefix={prefix}
        size={size}
      />
      <IconContainter id="searchIcon" size={size}>
        <Icon
          id="fa-solid fa-magnifying-glass"
          fillColor={color.darkBlue[900]}
        />
      </IconContainter>
    </Container>
  );
};

export default SearchBar;
