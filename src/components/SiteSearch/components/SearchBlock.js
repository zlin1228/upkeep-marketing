import React from 'react';
import shortid from 'shortid';

import Icon from '../../../molecules/Icon';

import SearchCard from './SearchCard';

import { color } from '../../../atoms/colors';
import { Container, Header, List } from '../styles/SearchBlock.styled';

const SearchBlock = ({
  customRef,
  heading,
  list,
  suggestions,
  icon,
  textColor,
  setSearchValue,
  handleSiteSearch,
  algoliaSearch,
  contentRef,
}) => {
  if (
    (list && list.length === 0) ||
    (suggestions && suggestions.length === 0)
  ) {
    return null;
  }

  return (
    <Container className="search-block">
      <Header textColor={textColor}>
        <Icon
          id={icon}
          width="24px"
          height="24px"
          fillColor={color.steel[700]}
        />
        {heading}
      </Header>
      {customRef && <SearchCard customRef={customRef} />}
      {list && list.length > 0 && (
        <List>
          {list.map(item => (
            <SearchCard
              key={shortid.generate()}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </List>
      )}
      {list && list.length === 0 && (
        <p className="no-results">No results found.</p>
      )}
      {suggestions && suggestions.length > 0 && (
        <List>
          {suggestions.map(suggestion => (
            <SearchCard
              key={shortid.generate()}
              question={
                typeof suggestion === 'object'
                  ? suggestion.question
                  : suggestion
              }
              setSearchValue={setSearchValue}
              handleSiteSearch={handleSiteSearch}
              algoliaSearch={algoliaSearch}
              contentRef={contentRef}
            />
          ))}
        </List>
      )}
      {suggestions && suggestions.length === 0 && (
        <p className="no-results">No suggestions found.</p>
      )}
    </Container>
  );
};

export default SearchBlock;
