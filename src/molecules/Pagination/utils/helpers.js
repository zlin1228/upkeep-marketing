export const handlePrev = (currentPage, paginate) => {
  if (currentPage > 1) paginate(currentPage - 1);
};

export const handleNext = (pageNumbers, currentPage, paginate) => {
  if (currentPage < pageNumbers.length) {
    paginate(currentPage + 1);
  }
};
