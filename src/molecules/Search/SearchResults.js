import React from 'react';
import { Container, Result, Text } from './styles/SearchResults.styled';

const SearchResults = ({ results, value, prefix, size }) => {
  if (!results || value === '') return null;
  return (
    <Container size={size} className="results">
      {results?.slice(0, 10)?.map(({ node }) => (
        <Result key={node?.id} to={`${prefix}/${node?.slug}`} size={size}>
          {node?.internalName}
        </Result>
      ))}
      {value !== '' && results.length === 0 && (
        <Text size={size}>No search results found</Text>
      )}
    </Container>
  );
};

export default SearchResults;
