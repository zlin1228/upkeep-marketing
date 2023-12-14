import { useState, useCallback } from 'react';
import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_INDEX,
  process.env.GATSBY_ALOGLIA_KEY
);

const useAlgolia = indexName => {
  const [searchResponse, setSearchResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = useCallback(
    async ({ query, requestOptions }) => {
      try {
        setSearchResponse(null);
        setLoading(true);

        const index = algoliaClient.initIndex(indexName);
        const response = await index.search(query, requestOptions);

        setSearchResponse(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [indexName]
  );

  return {
    search,
    searchResponse,
    setSearchResponse,
    loading,
    setLoading,
    error,
  };
};

export default useAlgolia;
