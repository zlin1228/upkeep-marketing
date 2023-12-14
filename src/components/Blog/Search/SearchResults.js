import React from 'react';
import { Link } from 'gatsby';
import { SearchSuggestions } from './styles/Search';

const SearchResults = ({ results, resultsFound, resultsNotFound }) => (
  <SearchSuggestions>
    {resultsFound &&
      results.map(result => {
        return (
          <Link to={`/blog/${result.node.slug}`} key={result.node.id}>
            {result.node.internalName}
          </Link>
        );
      })}
    {resultsNotFound && (
      <div className="result_not_found">No search results found</div>
    )}
  </SearchSuggestions>
);

export default SearchResults;
