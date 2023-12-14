import { useState, useEffect, useMemo } from 'react';

const scrollToElement = (ref, offset = 0) => {
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: 'smooth',
  });
};

const usePagination = ({
  postsPerPage,
  posts,
  scrollRef,
  scrollOffset,
  resetPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationData = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const activePosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbersIndexes = Math.ceil(posts.length / postsPerPage);
    const pageNumbers = Array.from(
      { length: pageNumbersIndexes },
      (_, i) => i + 1
    );

    return { activePosts, pageNumbers };
  }, [currentPage, postsPerPage, posts]);

  useEffect(() => {
    if (resetPage !== undefined && resetPage === true) {
      setCurrentPage(1);
    }
  }, [resetPage]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    if (scrollRef) scrollToElement(scrollRef, scrollOffset);
  };

  return {
    activePosts: paginationData.activePosts,
    pageNumbers: paginationData.pageNumbers,
    paginate,
    currentPage,
    nextPage: currentPage + 1,
    prevPage: currentPage - 1,
  };
};

export default usePagination;
