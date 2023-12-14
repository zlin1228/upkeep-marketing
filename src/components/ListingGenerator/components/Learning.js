import React, { useState, useEffect, useRef } from 'react';
import useFirstRender from '../../../hooks/useFirstRender';
import Pagination from '../../Pagination';
import usePagination from '../../Pagination/utils/usePagination';
import LearningFilter from '../../Filters/LearningFilter';
import LearningCard from '../../Cards/LearningCard';
import SubscriptionCard from '../../Cards/SubscriptionCard';
import MobileFilter from '../../Filters/LearningFilter/MobileFilter';
import { filterPosts } from '../../Filters/LearningFilter/utils';
import FilterIcon from '../../../assets/filter-icon.svg';
import {
  Section,
  Wrapper,
  Heading,
  Sidebar,
  Grid,
} from '../../../styles/Pages/LearningCenter';
import { useLearningData } from '../utils/useLearningData';

const Learning = () => {
  const { allDatoCmsLearningPost } = useLearningData();
  const contentRef = useRef(null);
  const firstRender = useFirstRender();
  const [mobileFilterActive, setMobileFilterActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const learningPosts = filterPosts(
    allDatoCmsLearningPost?.edges,
    activeFilters
  );
  const {
    activePosts,
    currentPage,
    nextPage,
    pageNumbers,
    paginate,
    prevPage,
  } = usePagination(10, learningPosts, 1000);

  useEffect(() => {
    if (firstRender) return;
    return paginate(1);
  }, [activeFilters, firstRender]);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const category = params.get('category');
    if (!category) return;
    const formatted = category.replace('and', '&').split('-').join(' ');
    setActiveFilters([...activeFilters, formatted]);
  }, []);

  return (
    <>
      <Section>
        <Wrapper>
          <Sidebar>
            <LearningFilter
              posts={allDatoCmsLearningPost?.edges}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          </Sidebar>
          <Grid ref={contentRef}>
            <Heading>
              <button
                type="button"
                className="filter-button"
                onClick={() => setMobileFilterActive(true)}
              >
                Filter
                <img src={FilterIcon} alt="filter-icon" />
              </button>
              Showing {activePosts?.length} of {learningPosts?.length}
            </Heading>
            {activePosts?.map(({ node }) => (
              <LearningCard key={node?.id} component={node} />
            ))}
            <Pagination
              pageNumbers={pageNumbers}
              paginate={paginate}
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </Grid>
          <SubscriptionCard />
        </Wrapper>
      </Section>
      <MobileFilter
        posts={allDatoCmsLearningPost?.edges}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        mobileFilterActive={mobileFilterActive}
        setMobileFilterActive={setMobileFilterActive}
      />
    </>
  );
};

export default Learning;
