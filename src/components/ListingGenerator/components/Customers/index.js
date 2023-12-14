/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import Pagination from '../../../../molecules/Pagination';
import usePagination from '../../../../molecules/Pagination/utils/usePagination';
import CustomersCard from '../../../Cards/CustomersCard';
import FilterBar from '../../../Filters/CustomersFilter';
import MobileFilter from '../../../Filters/CustomersFilter/MobileFilter';
import fetchIndustries from '../../../Filters/CustomersFilter/utils/fetchIndustries';
import filter from '../../../Filters/CustomersFilter/utils/filter';

import useFirstRender from '../../../../hooks/useFirstRender';

import { Container, Wrapper } from './styles/index.styled';

const Customers = ({ data }) => {
  const firstRender = useFirstRender();

  const contentRef = useRef(null);

  const [customerStories, setCustomerStories] = useState([]);
  const [activeIndustry, setActiveIndustry] = useState('Industry');
  const [activeFilter, setActiveFilter] = useState('Sort by Newest');
  const [mobileFilter, setMobileFilter] = useState(false);

  const {
    activePosts,
    currentPage,
    nextPage,
    pageNumbers,
    paginate,
    prevPage,
  } = usePagination({
    postsPerPage: 12,
    posts: customerStories,
    scrollRef: contentRef,
    scrollOffset: 250,
  });

  useEffect(() => {
    filter(data, activeIndustry, activeFilter, setCustomerStories);
  }, [activeFilter, activeIndustry, data]);

  useEffect(() => {
    if (firstRender) return;
    paginate(1);
  }, [activeFilter, activeIndustry]);

  return (
    <section>
      <FilterBar
        allPosts={data}
        activePosts={activePosts}
        successStories={data}
        industries={fetchIndustries(data)}
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        setActiveFilter={setActiveFilter}
        mobileFilter={mobileFilter}
        setMobileFilter={setMobileFilter}
      />
      <MobileFilter
        data={data}
        mobileFilter={mobileFilter}
        setMobileFilter={setMobileFilter}
        activeIndustry={activeIndustry}
        setActiveIndustry={setActiveIndustry}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Container ref={contentRef}>
        <Wrapper>
          {activePosts?.map(post => (
            <CustomersCard key={post?.id} component={post} />
          ))}
        </Wrapper>
        <Pagination
          pageNumbers={pageNumbers}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Container>
    </section>
  );
};

export default Customers;
