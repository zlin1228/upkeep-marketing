import React, { useState, useEffect, useRef } from 'react';
import Pagination from '../../../../molecules/Pagination';
import usePagination from '../../../../molecules/Pagination/utils/usePagination';
import useFirstRender from '../../../../hooks/useFirstRender';
import LearningFilter from '../../../Filters/LearningFilter';
import LearningCard from '../../../Cards/LearningCard';
import MobileFilter from '../../../Filters/LearningFilter/MobileFilter';
import { filterPosts } from '../../../Filters/LearningFilter/utils';
import {
  Section,
  OuterWrapper,
  InnerWrapper,
  Sidebar,
  Grid,
} from './styles/index.styled';
import Header from './components/Header';

const LearningCenter = ({ data }) => {
  const firstRender = useFirstRender();
  const contentRef = useRef(null);
  const [mobileFilterActive, setMobileFilterActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const learningPosts = filterPosts(data, activeFilters);

  const {
    activePosts,
    currentPage,
    nextPage,
    pageNumbers,
    paginate,
    prevPage,
  } = usePagination({
    postsPerPage: 10,
    posts: learningPosts,
    scrollRef: contentRef,
    scrollOffset: 200,
  });

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
    <Section>
      <OuterWrapper>
        <Sidebar>
          <LearningFilter
            posts={data}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </Sidebar>
        <InnerWrapper>
          <Header
            currentPosts={activePosts?.length * currentPage}
            totalPosts={learningPosts?.length}
            setMobileFilterActive={setMobileFilterActive}
          />
          <Grid ref={contentRef}>
            {activePosts?.map(node => (
              <LearningCard key={node?.id} component={node} />
            ))}
          </Grid>
          <Pagination
            pageNumbers={pageNumbers}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </InnerWrapper>
      </OuterWrapper>
      <MobileFilter
        posts={data}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        mobileFilterActive={mobileFilterActive}
        setMobileFilterActive={setMobileFilterActive}
      />
    </Section>
  );
};

export default LearningCenter;
