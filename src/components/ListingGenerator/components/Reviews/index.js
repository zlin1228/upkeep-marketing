import React, { useState, useRef, useEffect } from 'react';
import ReviewsFilter from '../../../Filters/ReviewsFilter';
import ReviewCard from '../../../Cards/ReviewCard';
import Pagination from '../../../../molecules/Pagination';
import usePagination from '../../../../molecules/Pagination/utils/usePagination';
import usePaginationCount from '../../../../molecules/Pagination/utils/usePaginationCount';
import { useReviewsData } from '../../utils/useReviewsData';
import { fetchFilters, filterReviews } from './utils';
import {
  Section,
  OuterWrapper,
  Sidebar,
  InnerWrapper,
  Header,
  Grid,
} from './styles/index.styled';
import useFirstRender from '../../../../hooks/useFirstRender';

const ReviewsListing = () => {
  const firstRender = useFirstRender();
  const { reviews } = useReviewsData();

  const sectionRef = useRef(null);

  const [activeFilters, setActiveFilters] = useState({
    sources: [],
    products: [],
    industries: [],
  });

  useEffect(() => {
    if (firstRender) return;
    return paginate(1);
  }, [activeFilters, firstRender]);

  const filteredReviews = filterReviews(reviews, activeFilters);

  const { activePosts, currentPage, pageNumbers, paginate } = usePagination({
    postsPerPage: 4,
    posts: filteredReviews,
    scrollRef: sectionRef,
    scrollOffset: 120,
  });
  const { numOfPosts } = usePaginationCount({
    paginatedPosts: activePosts,
    filteredPosts: filteredReviews,
    postsPerPage: 4,
    currentPage,
    pageNumbers,
  });

  return (
    <Section ref={sectionRef}>
      <OuterWrapper>
        <Sidebar>
          <ReviewsFilter
            component={fetchFilters(reviews)}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </Sidebar>
        <InnerWrapper>
          <Header>
            <p className="heading">
              Showing <span>{numOfPosts}</span> of{' '}
              <span>{filteredReviews?.length} </span>
              results
            </p>
          </Header>
          <Grid>
            {activePosts?.map(review => (
              <ReviewCard key={review.id} component={review} />
            ))}
          </Grid>
          <Pagination
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            paginate={paginate}
          />
        </InnerWrapper>
      </OuterWrapper>
    </Section>
  );
};

export default ReviewsListing;
