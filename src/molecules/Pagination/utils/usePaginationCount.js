import { useState, useEffect } from 'react';

const usePaginationCount = ({
  paginatedPosts,
  filteredPosts,
  postsPerPage,
  currentPage,
  pageNumbers,
}) => {
  const [numOfPosts, setNumOfPosts] = useState(0);

  useEffect(() => {
    const isNextPage = !(currentPage + 1 > pageNumbers.length);

    if (filteredPosts?.length < postsPerPage || !isNextPage) {
      setNumOfPosts(filteredPosts?.length);
      return;
    }

    setNumOfPosts(paginatedPosts?.length * currentPage);
  }, [currentPage, filteredPosts]);

  return { numOfPosts };
};

export default usePaginationCount;
