import { useEffect, useState } from 'react';

const useSearch = data => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchResults = data?.filter(({ node }) => {
      return node?.internalName?.toLowerCase()?.includes(value.toLowerCase());
    });
    setResults(searchResults);
  }, [value]);

  return { results, value, setValue };
};

export default useSearch;
